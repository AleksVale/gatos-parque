import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateResponseDTO {
  @ApiProperty()
  token!: string;

  @ApiProperty()
  role!: string;

  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;
}
