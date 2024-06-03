import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, VoluntaryRequest } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { VoluntaryResponseDto } from 'src/admin/voluntary/dto/voluntary-response.dto';

@Injectable()
export class VoluntaryRepository extends BaseRepository<VoluntaryRequest> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'adoption');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<VoluntaryResponseDto, Prisma.VoluntaryRequestFindManyArgs>(
      this.prismaService.adoption,
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
