import { BaseRepository } from './base.repository';
import { VoluntaryRequest } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { VoluntaryResponseDto } from 'src/admin/voluntary/dto/voluntary-response.dto';
import { IGetVoluntary } from 'src/supporter/voluntary/voluntary.service';
export declare class VoluntaryRepository extends BaseRepository<VoluntaryRequest> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(options: IGetVoluntary): Promise<import("prisma-pagination").PaginatedResult<VoluntaryResponseDto>>;
}
