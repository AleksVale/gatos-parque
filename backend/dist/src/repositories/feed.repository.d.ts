import { BaseRepository } from './base.repository';
import { Feed } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { FeedResponse } from 'src/admin/feed/dto/feed-response.dto';
export declare class FeedRepository extends BaseRepository<Feed> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<FeedResponse>>;
}
