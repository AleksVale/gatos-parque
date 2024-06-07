import { ApiProperty } from '@nestjs/swagger';

export class RouteResponseDto {
  @ApiProperty()
  name: string;
}
