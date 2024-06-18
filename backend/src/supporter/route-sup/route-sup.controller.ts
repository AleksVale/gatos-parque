import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RouteSupService } from './route-sup.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/public/auth/current-user-decorator';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { RoleGuard } from 'src/public/role/role.guard';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { RouteResponseDto } from 'src/admin/route/dto/route-response.dto';

@ApiTags('Supporter/Routes')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.SUPPORTER])
@Controller('supporter/routes')
export class RouteSupController {
  constructor(private readonly routeSupService: RouteSupService) {}

  @Post(':id/:pointId/file')
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({ type: SuccessResponseDTO, status: HttpStatus.CREATED })
  async createFile(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: TokenPayload,
    @Param('id', ParseIntPipe) id: number,
    @Param('pointId', ParseIntPipe) pointId: number,
  ) {
    await this.routeSupService.createFile(file, user, id, pointId);

    return { success: true };
  }

  @ApiCreatedResponse({ type: SuccessResponseDTO })
  @Post()
  async create(
    @Body() createCheckin: CreateCheckinDto,
  ): Promise<SuccessResponseDTO> {
    await this.routeSupService.create(createCheckin);
    return { success: true };
  }

  @ApiOkResponsePaginated(RouteResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.routeSupService.findAll({ page, perPage, user });
  }
}
