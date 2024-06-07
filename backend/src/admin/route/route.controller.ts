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
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { PointResponseDto } from '../points/dto/point-response.dto';

@ApiTags('Admin/Users')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @ApiResponse({ type: SuccessResponseDTO })
  @Post()
  async create(
    @Body() createRouteDto: CreateRouteDto,
  ): Promise<SuccessResponseDTO> {
    await this.routeService.create(createRouteDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(PointResponseDto)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.routeService.findAll({ page, perPage });
  }

  @ApiResponse({ type: PointResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(+id);
  }

  @ApiResponse({ type: SuccessResponseDTO })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRouteDto: UpdateRouteDto,
  ) {
    await this.routeService.update(+id, updateRouteDto);
    return { success: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(+id);
  }
}
