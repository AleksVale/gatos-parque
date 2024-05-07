import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';

export class UserResponseDto implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  document: string;

  @ApiProperty({ enum: ['$Enums.UserStatus'] })
  status: $Enums.UserStatus;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  photoKey: string | null;

  @ApiProperty({ type: String, required: false, nullable: true })
  addressId: string | null;

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
