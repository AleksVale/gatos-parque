/// <reference types="multer" />
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { AwsService } from 'src/public/aws/aws.service';
import { RouteRepository } from 'src/repositories/route.repository';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { IGetVoluntary } from '../voluntary/voluntary.service';
export declare class RouteSupService {
    private readonly routeRepository;
    private readonly awsService;
    constructor(routeRepository: RouteRepository, awsService: AwsService);
    createFile(file: Express.Multer.File, user: TokenPayload, routeId: number, pointId: number): Promise<any>;
    create(createCheckin: CreateCheckinDto): Promise<void>;
    findAll(options: IGetVoluntary): Promise<import("prisma-pagination").PaginatedResult<import("../../admin/route/dto/route-response.dto").RouteResponseDto>>;
}
