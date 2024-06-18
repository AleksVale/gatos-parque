import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { PointRepository } from 'src/repositories/point.repository';
import { IFilterGetUsers } from '../user/user.service';
export declare class PointsService {
    private readonly pointRepository;
    constructor(pointRepository: PointRepository);
    validatePointName(name: string): Promise<void>;
    create(createPointDto: CreatePointDto): Promise<{
        id: number;
        name: string;
        reference: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/point-response.dto").PointResponseDto>>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        reference: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: number, updatePointDto: UpdatePointDto): Promise<any>;
    remove(id: number): Promise<any>;
}
