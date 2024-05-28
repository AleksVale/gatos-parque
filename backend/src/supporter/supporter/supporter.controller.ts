import { Controller, Get, UseGuards } from '@nestjs/common';
import { SupporterService } from './supporter.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { Roles } from 'src/public/decorators/roles/roles.decorator';
import { Role } from 'src/public/role.enum';
import { RoleGuard } from 'src/public/role/role.guard';
import { CurrentUser } from 'src/public/auth/current-user-decorator';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { UserResponseDto } from 'src/admin/user/dto/user-response.dto';

@ApiTags('Supporter/Supporter')
@UseGuards(JwtAuthGuard, RoleGuard)
@Roles([Role.SUPPORTER])
@Controller('supporter')
export class SupporterController {
  constructor(private readonly supporterService: SupporterService) {}

  @ApiResponse({ type: UserResponseDto })
  @Get()
  findOne(@CurrentUser() user: TokenPayload) {
    return this.supporterService.findOne(+user.id);
  }
}
