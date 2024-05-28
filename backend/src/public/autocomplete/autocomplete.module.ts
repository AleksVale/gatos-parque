import { Module } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';
import { AutocompleteController } from './autocomplete.controller';

@Module({
  controllers: [AutocompleteController],
  providers: [AutocompleteService],
})
export class AutocompleteModule {}
