import { Controller, Get, Query } from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AutocompleteResponseDto } from './dto/autocomplete-response.dto';

@ApiTags('Autocomplete')
@Controller('autocomplete')
export class AutocompleteController {
  constructor(private readonly autocompleteService: AutocompleteService) {}

  @ApiResponse({
    status: 200,
    description: 'Returns all autocomplete fields',
    type: AutocompleteResponseDto,
  })
  @Get()
  findAll(@Query('fields') fields?: string) {
    return this.autocompleteService.findAll(fields);
  }
}
