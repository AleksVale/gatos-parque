import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsRepository } from 'src/repositories/cats.repository';

@Module({
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
})
export class CatsModule {}
