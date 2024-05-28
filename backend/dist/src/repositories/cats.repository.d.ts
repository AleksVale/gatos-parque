import { BaseRepository } from './base.repository';
import { Cat } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { CatResponseDto } from 'src/admin/cats/dto/cat-response.dto';
export declare class CatsRepository extends BaseRepository<Cat> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<CatResponseDto>>;
}
