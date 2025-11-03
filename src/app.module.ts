import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { PostsModule } from './posts/posts.module';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    PostsModule,
    CacheModule.register({
      store: redisStore,
      url: 'redis://localhost:6379',
      ttl: 60 * 1000,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
