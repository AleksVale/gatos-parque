import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
export declare class FeedService {
    create(createFeedDto: CreateFeedDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFeedDto: UpdateFeedDto): string;
    remove(id: number): string;
}
