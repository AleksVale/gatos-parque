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
import { CatsService } from './cats.service';
import { CatResponseDto } from './dto/cat-response.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';

@ApiTags('Admin/Cats')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiCreatedResponse({ type: SuccessResponseDTO })
  @Post()
  async create(
    @Body() createCatDto: CreateCatDto,
  ): Promise<SuccessResponseDTO> {
    await this.catsService.create(createCatDto);
    return { success: true };
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<SuccessResponseDTO> {
    await this.catsService.update(id, updateCatDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(CatResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.catsService.findAll({ page, perPage });
  }

  @ApiOkResponse({ type: CatResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SuccessResponseDTO> {
    await this.catsService.remove(id);
    return { success: true };
  }
}
