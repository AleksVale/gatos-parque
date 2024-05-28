import { BaseRepository } from './base.repository';
import { Adoption } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { AdoptionResponseDto } from 'src/admin/adoption/dto/adoption-response.dto';
export declare class AdoptionRepository extends BaseRepository<Adoption> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<AdoptionResponseDto>>;
}
