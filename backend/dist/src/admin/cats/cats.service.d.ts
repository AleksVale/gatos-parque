import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsRepository } from 'src/repositories/cats.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { IFilterGetUsers } from '../user/user.service';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    create(createCatDto: CreateCatDto): Promise<SuccessResponseDTO>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/cat-response.dto").CatResponseDto>>;
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
    update(id: string, updateCatDto: UpdateCatDto): Promise<any>;
    remove(id: string): Promise<any>;
}
