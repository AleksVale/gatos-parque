import { BaseRepository } from './base.repository';
import { Route } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { RouteResponseDto } from 'src/admin/route/dto/route-response.dto';
import { IGetVoluntary } from 'src/supporter/voluntary/voluntary.service';
export declare class RouteRepository extends BaseRepository<Route> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IGetVoluntary): Promise<import("prisma-pagination").PaginatedResult<RouteResponseDto>>;
    createRoutePoints(routeId: number, points: number[]): Promise<void>;
    findRoutePoints(routeId: number, pointId: number): Promise<{
        routeId: number;
        pointId: number;
        checkin: boolean;
        checkinPhotoKey: string | null;
    } | null>;
    createCheckin(routeId: number, pointId: number): Promise<{
        routeId: number;
        pointId: number;
        checkin: boolean;
        checkinPhotoKey: string | null;
    }>;
}
