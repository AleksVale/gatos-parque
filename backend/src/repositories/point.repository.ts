import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, Point } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { PointResponseDto } from 'src/admin/points/dto/point-response.dto';

@Injectable()
export class PointRepository extends BaseRepository<Point> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'point');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<PointResponseDto, Prisma.PointFindManyArgs>(
      this.prismaService.point,
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
