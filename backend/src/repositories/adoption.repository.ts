import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, Adoption } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { AdoptionResponseDto } from 'src/admin/adoption/dto/adoption-response.dto';

@Injectable()
export class AdoptionRepository extends BaseRepository<Adoption> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'adoption');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<AdoptionResponseDto, Prisma.AdoptionFindManyArgs>(
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
