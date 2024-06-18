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
  @ApiProperty()
  monday: boolean;

  @ApiProperty()
  tuesday: boolean;

  @ApiProperty()
  wednesday: boolean;

  @ApiProperty()
  thursday: boolean;

  @ApiProperty()
  friday: boolean;

  @ApiProperty()
  saturday: boolean;

  @ApiProperty()
  sunday: boolean;

  @ApiProperty({ type: [RoutePointResponseDto], isArray: true })
  RoutePoint: RoutePointResponseDto[];
}
