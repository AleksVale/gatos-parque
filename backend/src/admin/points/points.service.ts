import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { PointRepository } from 'src/repositories/point.repository';
import { Prisma } from '@prisma/client';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class PointsService {
  constructor(private readonly pointRepository: PointRepository) {}

  async validatePointName(name: string) {
    const point = await this.pointRepository.find<
      Prisma.PointWhereInput,
      never
    >({ name });
    if (point) {
      throw new BadRequestException(`Ponto com o nome ${name} já existe`);
    }
  }

  async create(createPointDto: CreatePointDto) {
    await this.validatePointName(createPointDto.name);
    return this.pointRepository.create<Prisma.PointCreateInput>(createPointDto);
  }

  findAll(options: IFilterGetUsers) {
    return this.pointRepository.findAll(options);
  }

  async findOne(id: number) {
    const point = this.pointRepository.find<
      Prisma.PointWhereUniqueInput,
      never
    >({
      id,
    });
    if (!point) {
      throw new BadRequestException(`Point with id ${id} not found`);
    }
    return point;
  }

  async update(id: number, updatePointDto: UpdatePointDto) {
    await this.validatePointName(updatePointDto.name ?? '');

    return this.pointRepository.update<
      Prisma.PointUpdateInput,
      Prisma.PointWhereUniqueInput
    >(updatePointDto, { id });
  }

  remove(id: number) {
    return this.pointRepository.delete<Prisma.PointWhereUniqueInput>({ id });
  }
}
