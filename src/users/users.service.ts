import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { UserDto } from './users.dto';
import { RedisService } from 'src/lib/redis/redis.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  private readonly PREFIX = 'user:';
  private readonly TTL = 3600;

  constructor(
    private readonly httpService: HttpService,
    private readonly redis: RedisService,
  ) {}

  private key(id: number | string) {
    return `${this.PREFIX}${id}`;
  }

  async create(createUserDto: CreateUserDto) {
    return `This action adds a new user`;
  }

  async findOne(id: number): Promise<UserDto> {
    const key = this.key(id);
    const cached = await this.redis.hgetall(key);
    const nameField = await this.redis.hget(key, 'name');

    const key_view = `views:user:${id}`;
    const client = this.redis.getClient();

    const views = await client.incr(key_view);
    console.log({ views });
    if (views === 1) {
      await client.expire(key, 24 * 60 * 60);
    }

    console.log(`Product ${id} has ${views} views today`);

    if (nameField) {
      console.log('Cache MISS for', key);
      console.log({ nameField });
    }

    if (cached && Object.keys(cached).length > 0) {
      console.log('Cache HIT for', key);
      return {
        ...cached,
        id: Number(cached.id),
        address: JSON.parse(cached.address || '{}'),
        company: JSON.parse(cached.company || '{}'),
      } as any;
    }

    const { data } = await firstValueFrom(
      this.httpService.get<UserDto>(`${this.url}/${id}`),
    );

    console.log('Cache MISS for', key);

    const flat = {
      id: String(data.id),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
      address: JSON.stringify(data.address),
      company: JSON.stringify(data.company),
    };

    await this.redis.hset(key, flat);
    await this.redis.expire(key, this.TTL);

    return data;
  }

  async findAll(): Promise<UserDto[]> {
    const users: UserDto[] = [];
    for (let i = 1; i <= 10; i++) {
      users.push(await this.findOne(i));
    }
    return users;
  }

  async warmCache() {
    const { data } = await firstValueFrom(
      this.httpService.get<UserDto[]>(this.url),
    );

    const multi = this.redis.multi();
    for (const user of data) {
      const flat = {
        id: String(user.id),
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: JSON.stringify(user.address),
        company: JSON.stringify(user.company),
      };
      multi.hset(this.key(user.id), flat);
      multi.expire(this.key(user.id), this.TTL);
    }
    await multi.exec();
    console.log('All users cached with REAL HASH pattern');
  }

  async update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
