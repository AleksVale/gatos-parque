import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { createPaginator } from 'prisma-pagination';
import { UserResponseDto } from 'src/admin/user/dto/user-response.dto';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'user');
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
      include: {
        role: true,
      },
    });
  }

  async findAll(options: IFilterGetUsers) {
    const paginate = createPaginator({ perPage: options.perPage });

    return paginate<UserResponseDto, Prisma.UserFindManyArgs>(
      this.prismaService.user,
      {
        where: {},
        orderBy: { createdAt: 'asc' },
        include: { role: true },
      },
      {
        page: options.page,
      },
    );
  }
}
