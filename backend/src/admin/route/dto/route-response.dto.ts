import { ApiProperty } from '@nestjs/swagger';

export class RoutePointResponseDto {
  @ApiProperty()
  routeId: number;

  @ApiProperty()
  pointId: number;

  @ApiProperty()
  checkin: boolean;
}

export class RouteResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: [RoutePointResponseDto], isArray: true })
  RoutePoint: RoutePointResponseDto[];
}
