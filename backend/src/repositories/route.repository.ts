import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, Route } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { RouteResponseDto } from 'src/admin/route/dto/route-response.dto';

@Injectable()
export class RouteRepository extends BaseRepository<Route> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'route');
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<RouteResponseDto, Prisma.RouteFindManyArgs>(
      this.prismaService.route,
      {
        where: {},
        orderBy: { createdAt: 'asc' },
      },
      {
        page: options.page,
      },
    );
  }

  async createRoutePoints(routeId: number, points: number[]) {
    const data = points.map((point) => ({
      routeId,
      pointId: point,
    }));
    await this.prismaService.routePoint.createMany({ data });
  }
}
