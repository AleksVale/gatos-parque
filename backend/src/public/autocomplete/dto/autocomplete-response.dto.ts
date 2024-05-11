import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class AutocompleteResponse {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  label!: string;
}

export class AutocompleteResponseDto {
  @ApiPropertyOptional({
    type: AutocompleteResponse,
    isArray: true,
  })
  roles?: AutocompleteResponse[];
}
