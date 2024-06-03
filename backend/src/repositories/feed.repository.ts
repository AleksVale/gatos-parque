import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Feed, Prisma } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { FeedResponse } from 'src/admin/feed/dto/feed-response.dto';

@Injectable()
export class FeedRepository extends BaseRepository<Feed> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'feed');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<FeedResponse, Prisma.FeedFindManyArgs>(
      this.prismaService.feed,
      {
        where: {},
        orderBy: { createdAt: 'asc' },
        include: { user: true },
      },
      {
        page: options.page,
      },
    );
  }
}
