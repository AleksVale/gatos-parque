import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { VoluntaryService } from './voluntary.service';
import { VoluntaryResponseDto } from './dto/voluntary-response.dto';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { CurrentUser } from 'src/public/auth/current-user-decorator';
import { TokenPayload } from 'src/public/auth/jwt.strategy';

@ApiTags('Supporter/Voluntary')
@Controller('supporter/voluntary')
export class VoluntaryController {
  constructor(private readonly voluntaryService: VoluntaryService) {}

  @ApiCreatedResponse({ type: SuccessResponseDTO })
  @Post()
  async create(
    @Body() createVoluntaryDto: CreateVoluntaryDto,
  ): Promise<SuccessResponseDTO> {
    await this.voluntaryService.create(createVoluntaryDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(VoluntaryResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.voluntaryService.findAll({ page, perPage, user });
  }

  @ApiOkResponse({ type: VoluntaryResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voluntaryService.findOne(id);
  }
}
