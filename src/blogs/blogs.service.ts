import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { RedisService } from 'src/lib/redis/redis.service';

@Injectable()
export class BlogsService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private readonly httpService: HttpService,
    private readonly redis: RedisService,
  ) {}

  async addToActivity(userId: number, postId: number) {
    const key = `user:${userId}:activity`;
    const item = `blog:${postId}`;

    const client = this.redis.getClient();

    await client.lpush(key, item);
    await client.ltrim(key, 0, 9);
    await client.expire(key, 3600);
  }

  async getRecentActivity(userId: number) {
    const key = `user:${userId}:activity`;
    const client = this.redis.getClient();

    const listItems = await client.lrange(key, 0, 9);

    if (!listItems || listItems.length === 0) return [];

    const blogIds = listItems
      .map((item) => item.replace('blog:', ''))
      .map(Number);

    const requests = blogIds.map((id) =>
      firstValueFrom(this.httpService.get(`${this.baseUrl}/${id}`)).catch(
        () => null,
      ),
    );

    const responses = await Promise.all(requests);

    return responses.filter((r) => r !== null).map((r) => r.data);
  }

  create(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  findAll() {
    return `This action returns all blogs`;
  }

  async findOne(postId: number, userId: number) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/${postId}`),
    );

    await this.addToActivity(userId, postId);

    return data;
  }

  async activity(userId: number) {
    const key = `user:${userId}:activity`;
    console.log({ key });
    return this.getRecentActivity(userId);
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
