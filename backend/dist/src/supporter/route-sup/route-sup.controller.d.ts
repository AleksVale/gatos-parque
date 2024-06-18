/// <reference types="multer" />
import { RouteSupService } from './route-sup.service';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { RouteResponseDto } from 'src/admin/route/dto/route-response.dto';
export declare class RouteSupController {
    private readonly routeSupService;
    constructor(routeSupService: RouteSupService);
    createFile(file: Express.Multer.File, user: TokenPayload, id: number, pointId: number): Promise<{
        success: boolean;
    }>;
    create(createCheckin: CreateCheckinDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number, user: TokenPayload): Promise<import("prisma-pagination").PaginatedResult<RouteResponseDto>>;
}
