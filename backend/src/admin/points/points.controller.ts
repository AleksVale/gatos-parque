import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PointsService } from './points.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { PointResponseDto } from './dto/point-response.dto';

@ApiTags('Admin/Points')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @ApiResponse({
    status: 201,
    description: 'Point created successfully',
    type: SuccessResponseDTO,
  })
  @Post()
  async create(@Body() createPointDto: CreatePointDto) {
    await this.pointsService.create(createPointDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(PointResponseDto)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.pointsService.findAll({ page, perPage });
  }

  @ApiResponse({ type: PointResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointsService.findOne(+id);
  }

  @ApiResponse({
    type: SuccessResponseDTO,
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePointDto: UpdatePointDto,
  ) {
    await this.pointsService.update(+id, updatePointDto);
    return { success: true };
  }

  @ApiResponse({
    type: SuccessResponseDTO,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.pointsService.remove(+id);
    return { success: true };
  }
}
