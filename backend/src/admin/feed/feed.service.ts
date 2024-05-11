import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedRepository } from 'src/repositories/feed.repository';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}

  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }

  findAll({page, perPage} : IFilterGetUsers) {
    return this.feedRepository.findAll({page, perPage});
  }

  findOne(id: number) {
    return `This action returns a #${id} feed`;
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
