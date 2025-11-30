import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { RedisModule } from './lib/redis/redis.module';
import { HttpModule } from '@nestjs/axios';
import { BlogsModule } from './blogs/blogs.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [PostsModule, UsersModule, RedisModule, HttpModule, BlogsModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
