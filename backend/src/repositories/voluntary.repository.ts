import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, VoluntaryRequest } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { VoluntaryResponseDto } from 'src/admin/voluntary/dto/voluntary-response.dto';
import { IGetVoluntary } from 'src/supporter/voluntary/voluntary.service';

@Injectable()
export class VoluntaryRepository extends BaseRepository<VoluntaryRequest> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'voluntaryRequest');
  }

  async findAll(options: IGetVoluntary) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<VoluntaryResponseDto, Prisma.VoluntaryRequestFindManyArgs>(
      this.prismaService.voluntaryRequest,
      {
        where: {},
        orderBy: { createdAt: 'asc' },
      },
      {
        page: options.page,
      },
    );
  }
}
