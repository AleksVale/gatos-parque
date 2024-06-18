import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from './points.controller';
import { PointRepository } from 'src/repositories/point.repository';

@Module({
  controllers: [PointsController],
  providers: [PointsService, PointRepository],
})
export class PointsModule {}
