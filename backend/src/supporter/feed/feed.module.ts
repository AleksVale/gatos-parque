import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from 'src/admin/feed/feed.service';
import { FeedRepository } from 'src/repositories/feed.repository';

@Module({
  controllers: [FeedController],
  providers: [FeedService, FeedRepository],
})
export class FeedModule {}
