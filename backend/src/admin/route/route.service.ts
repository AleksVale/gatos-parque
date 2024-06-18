import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteRepository } from 'src/repositories/route.repository';
import { Prisma } from '@prisma/client';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class RouteService {
  constructor(private readonly routeRepository: RouteRepository) {}
  async create(createRouteDto: CreateRouteDto) {
    const { points, ...entity } = createRouteDto;
    const route =
      await this.routeRepository.create<Prisma.RouteUncheckedCreateInput>(
        entity,
      );
    if (route) {
      await this.routeRepository.createRoutePoints(route.id, points);
    }
  }

  findAll(options: IFilterGetUsers) {
    return this.routeRepository.findAll(options);
  }

  findOne(id: number) {
    return this.routeRepository.find<
      Prisma.RouteWhereUniqueInput,
      Prisma.RouteInclude
    >(
      { id },
      {
        RoutePoint: true,
        user: true,
      },
    );
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.routeRepository.update(updateRouteDto, { id });
  }

  remove(id: number) {
    return this.routeRepository.delete<Prisma.RouteWhereUniqueInput>({ id });
  }
}
