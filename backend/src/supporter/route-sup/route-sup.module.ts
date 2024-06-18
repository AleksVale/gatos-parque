import { Module } from '@nestjs/common';
import { RouteSupService } from './route-sup.service';
import { RouteSupController } from './route-sup.controller';
import { AwsService } from 'src/public/aws/aws.service';
import { RouteRepository } from 'src/repositories/route.repository';

@Module({
  controllers: [RouteSupController],
  providers: [RouteSupService, AwsService, RouteRepository],
})
export class RouteSupModule {}
