import { FeedResponse } from 'src/admin/feed/dto/feed-response.dto';
import { FeedService } from 'src/admin/feed/feed.service';
export declare class FeedController {
    private readonly feedService;
    constructor(feedService: FeedService);
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<FeedResponse>>;
}
