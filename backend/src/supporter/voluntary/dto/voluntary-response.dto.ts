import { ApiProperty } from '@nestjs/swagger';
import { $Enums, VoluntaryRequest } from '@prisma/client';

export class VoluntaryResponseDto implements VoluntaryRequest {
  reason: string;
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  document: string;

  @ApiProperty({ enum: ['$Enums.RequestStatus'] })
  status: $Enums.RequestStatus;

  @ApiProperty({ type: String, required: false, nullable: true })
  photoKey: string | null;

  @ApiProperty()
  addressId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
