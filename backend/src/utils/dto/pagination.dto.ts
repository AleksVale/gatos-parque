import { ApiProperty } from '@nestjs/swagger';

export class PaginationMeta {
  @ApiProperty()
  total!: number;

  @ApiProperty()
  lastPage!: number;

  @ApiProperty()
  currentPage!: number;

  @ApiProperty()
  perPage!: number;

  @ApiProperty({ nullable: true })
  prev!: number | null;

  @ApiProperty({ nullable: true })
  next!: number | null;
}
export class PaginatedResponseDto<T> {
  data!: T[];

  @ApiProperty({ type: PaginationMeta })
  meta!: PaginationMeta;
}
