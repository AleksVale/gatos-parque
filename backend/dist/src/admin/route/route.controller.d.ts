import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
export declare class RouteController {
    private readonly routeService;
    constructor(routeService: RouteService);
    create(createRouteDto: CreateRouteDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<import("./dto/route-response.dto").RouteResponseDto>>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        userId: string;
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
        sunday: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateRouteDto: UpdateRouteDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<any>;
}
