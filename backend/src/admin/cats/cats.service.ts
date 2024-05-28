import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsRepository } from 'src/repositories/cats.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { CatStatus, Prisma } from '@prisma/client';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}
  async create(createCatDto: CreateCatDto): Promise<SuccessResponseDTO> {
    await this.catsRepository.create<Prisma.CatUncheckedCreateInput>(
      createCatDto,
    );
    return { success: true };
  }

  findAll(options: IFilterGetUsers) {
    return this.catsRepository.findAll(options);
  }

  async findOne(id: string) {
    const cat = await this.catsRepository.find<
      Prisma.CatWhereInput,
      Prisma.CatInclude
    >({
      id,
    });
    if (!cat) throw new BadRequestException('Gato não encontrado');
    return cat;
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update<
      Prisma.CatUncheckedUpdateInput,
      Prisma.CatWhereUniqueInput
    >(updateCatDto, { id });
  }

  async remove(id: string) {
    return this.catsRepository.update<
      Prisma.CatUncheckedUpdateInput,
      Prisma.CatWhereUniqueInput
    >({ status: CatStatus.DISABLED }, { id });
  }
}
