import { Injectable } from '@nestjs/common';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { AwsService } from 'src/public/aws/aws.service';
import { RouteRepository } from 'src/repositories/route.repository';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { IGetVoluntary } from '../voluntary/voluntary.service';

@Injectable()
export class RouteSupService {
  constructor(
    private readonly routeRepository: RouteRepository,
    private readonly awsService: AwsService,
  ) {}

  async createFile(
    file: Express.Multer.File,
    user: TokenPayload,
    routeId: number,
    pointId: number,
  ) {
    const route = await this.routeRepository.findRoutePoints(routeId, pointId);
    const photoKey = route?.checkinPhotoKey
      ? route.checkinPhotoKey
      : this.awsService.createCheckInPhotoKey({
          extension: file.mimetype.split('/')[1],
          pointId: pointId,
          routeId: routeId,
          userId: user.id,
        });
    await this.awsService.updatePhoto(file, photoKey);
    return this.routeRepository.updatePhotoKey(photoKey, routeId, pointId);
  }

  async create(createCheckin: CreateCheckinDto) {
    await this.routeRepository.createCheckin(
      createCheckin.routeId,
      createCheckin.pointId,
    );
  }

  findAll(options: IGetVoluntary) {
    return this.routeRepository.findAll(options);
  }
}
