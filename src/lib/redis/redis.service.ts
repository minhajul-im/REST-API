import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  async onModuleInit() {
    console.log('Redis connected bro');
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  hgetall(key: string) {
    return this.client.hgetall(key);
  }

  hset(key: string, data: Record<string, string | number>) {
    return this.client.hset(key, data);
  }

  expire(key: string, seconds: number) {
    return this.client.expire(key, seconds);
  }

  del(key: string) {
    return this.client.del(key);
  }

  multi() {
    return this.client.multi();
  }
}
