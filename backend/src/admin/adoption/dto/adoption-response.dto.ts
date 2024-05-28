import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Adoption } from '@prisma/client';

export class AdoptionResponseDto implements Adoption {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  catId: string;

  @ApiProperty()
  addressId: string;

  @ApiProperty({ enum: ['$Enums.RequestStatus'] })
  status: $Enums.RequestStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
