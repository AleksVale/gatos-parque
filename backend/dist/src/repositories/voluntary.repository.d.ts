import { BaseRepository } from './base.repository';
import { VoluntaryRequest } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { VoluntaryResponseDto } from 'src/admin/voluntary/dto/voluntary-response.dto';
export declare class VoluntaryRepository extends BaseRepository<VoluntaryRequest> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<VoluntaryResponseDto>>;
}
