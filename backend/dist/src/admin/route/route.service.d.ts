import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteRepository } from 'src/repositories/route.repository';
import { IFilterGetUsers } from '../user/user.service';
export declare class RouteService {
    private readonly routeRepository;
    constructor(routeRepository: RouteRepository);
    create(createRouteDto: CreateRouteDto): Promise<void>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/route-response.dto").RouteResponseDto>>;
    findOne(id: number): Promise<{
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
    update(id: number, updateRouteDto: UpdateRouteDto): Promise<any>;
    remove(id: number): Promise<any>;
}
