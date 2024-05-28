import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoluntaryService } from './voluntary.service';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';

@Controller('voluntary')
export class VoluntaryController {
  constructor(private readonly voluntaryService: VoluntaryService) {}

  @Post()
  create(@Body() createVoluntaryDto: CreateVoluntaryDto) {
    return this.voluntaryService.create(createVoluntaryDto);
  }

  @Get()
  findAll() {
    return this.voluntaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voluntaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoluntaryDto: UpdateVoluntaryDto) {
    return this.voluntaryService.update(+id, updateVoluntaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voluntaryService.remove(+id);
  }
}
