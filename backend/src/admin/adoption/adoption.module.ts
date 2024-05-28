import { Module } from '@nestjs/common';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { AdoptionRepository } from 'src/repositories/adoption.repository';

@Module({
  controllers: [AdoptionController],
  providers: [AdoptionService, AdoptionRepository],
})
export class AdoptionModule {}
