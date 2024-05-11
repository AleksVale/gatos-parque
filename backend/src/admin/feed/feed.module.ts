import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { FeedRepository } from 'src/repositories/feed.repository';

@Module({
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
})
export class FeedModule {}
