import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { AdoptionRepository } from 'src/repositories/adoption.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { RequestStatus, Prisma } from '@prisma/client';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class AdoptionService {
  constructor(private readonly adoptionRepository: AdoptionRepository) {}
  async create(
    createAdoptionDto: CreateAdoptionDto,
  ): Promise<SuccessResponseDTO> {
    await this.adoptionRepository.create<Prisma.AdoptionUncheckedCreateInput>(
      createAdoptionDto,
    );
    return { success: true };
  }

  findAll(options: IFilterGetUsers) {
    return this.adoptionRepository.findAll(options);
  }

  async findOne(id: string) {
    const adoption = await this.adoptionRepository.find<
      Prisma.AdoptionWhereInput,
      Prisma.AdoptionInclude
    >({
      id,
    });
    if (!adoption) throw new BadRequestException('Adoção não encontrada');
    return adoption;
  }

  update(id: string, updateAdoptionDto: UpdateAdoptionDto) {
    return this.adoptionRepository.update<
      Prisma.AdoptionUncheckedUpdateInput,
      Prisma.AdoptionWhereUniqueInput
    >(updateAdoptionDto, { id });
  }

  async remove(id: string) {
    return this.adoptionRepository.update<
      Prisma.AdoptionUncheckedUpdateInput,
      Prisma.AdoptionWhereUniqueInput
    >({ status: RequestStatus.REJECTED }, { id });
  }
}
