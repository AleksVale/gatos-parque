import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedResponse } from './dto/feed-response.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
export declare class FeedController {
    private readonly feedService;
    constructor(feedService: FeedService);
    create(createFeedDto: CreateFeedDto, user: TokenPayload): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<FeedResponse>>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        photo_key: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        status: boolean;
    } | null>;
    update(id: string, updateFeedDto: UpdateFeedDto): Promise<{
        success: boolean;
    }>;
    updateStatus(id: string): Promise<SuccessResponseDTO>;
    remove(id: string): string;
}
