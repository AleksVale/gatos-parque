import { CatsService } from './cats.service';
import { CatResponseDto } from './dto/cat-response.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<SuccessResponseDTO>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<CatResponseDto>>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        age: number;
        description: string;
        status: import(".prisma/client").$Enums.CatStatus;
        photoKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<SuccessResponseDTO>;
}
