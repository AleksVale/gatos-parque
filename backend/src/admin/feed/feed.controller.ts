import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, DefaultValuePipe, Query, ParseIntPipe } from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FeedResponse } from './dto/feed-response.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';
import { Role } from 'src/public/role.enum';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { CurrentUser } from 'src/public/auth/current-user-decorator';
import { TokenPayload } from 'src/public/auth/jwt.strategy';

@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.ADMIN])
@ApiTags('Admin/Feed')
@Controller('admin/feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) { }

  @Post()
  create(@Body() createFeedDto: CreateFeedDto, @CurrentUser() user: TokenPayload) {
    return this.feedService.create(createFeedDto, user);
  }

  @ApiOkResponsePaginated(FeedResponse)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.feedService.findAll({ page, perPage });
  }

  @ApiResponse({ type: FeedResponse })

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    await this.feedService.update(id, updateFeedDto);
    return { success: true }
  }

  @Patch('/status/:id')
  async updateStatus(@Param('id') id: string):Promise<SuccessResponseDTO> {
    await this.feedService.updateStatus(id);
    return { success: true }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedService.remove(+id);
  }
}
