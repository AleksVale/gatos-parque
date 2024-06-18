import { PointsService } from './points.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { PointResponseDto } from './dto/point-response.dto';
export declare class PointsController {
    private readonly pointsService;
    constructor(pointsService: PointsService);
    create(createPointDto: CreatePointDto): Promise<{
        success: boolean;
    }>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<PointResponseDto>>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        reference: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updatePointDto: UpdatePointDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
