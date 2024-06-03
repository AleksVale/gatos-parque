import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedRepository } from 'src/repositories/feed.repository';
import { IFilterGetUsers } from '../user/user.service';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
export declare class FeedService {
    private readonly feedRepository;
    constructor(feedRepository: FeedRepository);
    create(createFeedDto: CreateFeedDto, user: TokenPayload): Promise<SuccessResponseDTO>;
    findAll({ page, perPage }: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/feed-response.dto").FeedResponse>>;
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
    update(id: string, updateFeedDto: UpdateFeedDto): Promise<any>;
    updateStatus(id: string): Promise<any>;
    remove(id: number): string;
}
