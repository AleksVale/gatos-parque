import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponseDTO {
  @ApiProperty({
    description: 'An indicator of the success of the operation',
    example: 'true',
  })
  success: boolean;
}
