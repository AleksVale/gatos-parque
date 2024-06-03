import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { VoluntaryService } from './voluntary.service';
import { VoluntaryResponseDto } from './dto/voluntary-response.dto';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';

@ApiTags('Admin/Voluntary')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/voluntary')
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

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVoluntaryDto: UpdateVoluntaryDto,
  ): Promise<SuccessResponseDTO> {
    await this.voluntaryService.update(id, updateVoluntaryDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(VoluntaryResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.voluntaryService.findAll({ page, perPage });
  }

  @ApiOkResponse({ type: VoluntaryResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voluntaryService.findOne(id);
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SuccessResponseDTO> {
    await this.voluntaryService.remove(id);
    return { success: true };
  }
}
