import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, Cat } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { CatResponseDto } from 'src/admin/cats/dto/cat-response.dto';

@Injectable()
export class CatsRepository extends BaseRepository<Cat> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'cat');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<CatResponseDto, Prisma.CatFindManyArgs>(
      this.prismaService.cat,
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
