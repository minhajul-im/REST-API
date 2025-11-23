import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { RedisModule } from './lib/redis/redis.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PostsModule, UsersModule, RedisModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
