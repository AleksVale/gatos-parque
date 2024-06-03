import { Module } from '@nestjs/common';
import { VoluntaryController } from './voluntary.controller';
import { VoluntaryService } from './voluntary.service';
import { VoluntaryRepository } from 'src/repositories/voluntary.repository';

@Module({
  controllers: [VoluntaryController],
  providers: [VoluntaryService, VoluntaryRepository],
})
export class VoluntaryModule {}
