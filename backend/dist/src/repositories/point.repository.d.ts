import { BaseRepository } from './base.repository';
import { Point } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { PointResponseDto } from 'src/admin/points/dto/point-response.dto';
export declare class PointRepository extends BaseRepository<Point> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<PointResponseDto>>;
}
