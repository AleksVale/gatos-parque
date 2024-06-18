import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { RouteRepository } from 'src/repositories/route.repository';

@Module({
  controllers: [RouteController],
  providers: [RouteService, RouteRepository],
})
export class RouteModule {}
