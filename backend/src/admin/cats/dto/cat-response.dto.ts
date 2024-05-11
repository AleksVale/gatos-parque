import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Cat } from '@prisma/client';

export class CatResponseDto implements Cat {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: ['$Enums.CatStatus'] })
  status: $Enums.CatStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: String, required: false, nullable: true })
  photoKey: string | null;
}
