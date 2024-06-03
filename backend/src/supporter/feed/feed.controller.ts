import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedResponse } from 'src/admin/feed/dto/feed-response.dto';
import { FeedService } from 'src/admin/feed/feed.service';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { ApiOkResponsePaginated } from 'src/public/decorators/paginatedResponse';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';

@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.SUPPORTER])
@ApiTags('Supporter/Feed')
@Controller('supporter/feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @ApiOkResponsePaginated(FeedResponse)
  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('per_page', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
  ) {
    return this.feedService.findAll({ page, perPage });
  }
}
