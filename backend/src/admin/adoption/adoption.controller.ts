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
import { AdoptionService } from './adoption.service';
import { AdoptionResponseDto } from './dto/adoption-response.dto';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';

@ApiTags('Admin/Adoption')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @ApiCreatedResponse({ type: SuccessResponseDTO })
  @Post()
  async create(
    @Body() createAdoptionDto: CreateAdoptionDto,
  ): Promise<SuccessResponseDTO> {
    await this.adoptionService.create(createAdoptionDto);
    return { success: true };
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdoptionDto: UpdateAdoptionDto,
  ): Promise<SuccessResponseDTO> {
    await this.adoptionService.update(id, updateAdoptionDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(AdoptionResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.adoptionService.findAll({ page, perPage });
  }

  @ApiOkResponse({ type: AdoptionResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adoptionService.findOne(id);
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SuccessResponseDTO> {
    await this.adoptionService.remove(id);
    return { success: true };
  }
}
