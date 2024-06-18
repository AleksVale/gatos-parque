import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, Route } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { RouteResponseDto } from 'src/admin/route/dto/route-response.dto';
import { IGetVoluntary } from 'src/supporter/voluntary/voluntary.service';

@Injectable()
export class RouteRepository extends BaseRepository<Route> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'route');
  }

  async findAll(options: IGetVoluntary) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<RouteResponseDto, Prisma.RouteFindManyArgs>(
      this.prismaService.route,
      {
        where: { userId: options.user?.id },
        include: { RoutePoint: { include: { point: true } } },
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
      checkin: false,
    }));
    await this.prismaService.routePoint.createMany({ data });
  }

  async findRoutePoints(routeId: number, pointId: number) {
    return this.prismaService.routePoint.findFirst({
      where: { routeId, pointId },
    });
  }

  async createCheckin(routeId: number, pointId: number) {
    return this.prismaService.routePoint.update({
      where: { routeId_pointId: { routeId, pointId } },
      data: { checkin: true },
    });
  }
}
