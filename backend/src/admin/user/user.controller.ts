import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserAdminDTO } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { RoleGuard } from 'src/public/role/role.guard';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { UserResponseDto } from './dto/user-response.dto';
import { UpdateUserAdminDTO } from './dto/update-user.dto';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { Role } from 'src/public/role.enum';

@ApiTags('Admin/Users')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@Controller('admin/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ type: SuccessResponseDTO })
  @Post()
  create(
    @Body() createUserDto: CreateUserAdminDTO,
  ): Promise<SuccessResponseDTO> {
    return this.userService.create(createUserDto);
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserAdminDTO,
  ): Promise<SuccessResponseDTO> {
    await this.userService.update(id, updateUserDto);
    return { success: true };
  }

  @ApiOkResponsePaginated(UserResponseDto)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.userService.findAll({ page, perPage });
  }

  @ApiOkResponse({ type: UserResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOkResponse({ type: SuccessResponseDTO })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SuccessResponseDTO> {
    await this.userService.remove(id);
    return { success: true };
  }
}
