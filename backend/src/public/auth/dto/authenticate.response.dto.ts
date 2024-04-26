import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateResponseDTO {
  @ApiProperty()
  token!: string;

  @ApiProperty()
  id!: string;

  @ApiProperty()
  profile!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  photo!: string | null;
}
