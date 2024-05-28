import { Module } from '@nestjs/common';
import { SupporterService } from './supporter.service';
import { SupporterController } from './supporter.controller';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  controllers: [SupporterController],
  providers: [SupporterService, UserRepository],
})
export class SupporterModule {}
