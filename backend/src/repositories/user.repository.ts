import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { User } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, 'user');
  }
}
