import { Injectable } from '@nestjs/common';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';

@Injectable()
export class VoluntaryService {
  create(createVoluntaryDto: CreateVoluntaryDto) {
    return 'This action adds a new voluntary';
  }

  findAll() {
    return `This action returns all voluntary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voluntary`;
  }

  update(id: number, updateVoluntaryDto: UpdateVoluntaryDto) {
    return `This action updates a #${id} voluntary`;
  }

  remove(id: number) {
    return `This action removes a #${id} voluntary`;
  }
}
