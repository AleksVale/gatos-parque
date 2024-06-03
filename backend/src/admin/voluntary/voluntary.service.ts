import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { VoluntaryRepository } from 'src/repositories/voluntary.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { RequestStatus, Prisma } from '@prisma/client';
import { IFilterGetUsers } from '../user/user.service';

@Injectable()
export class VoluntaryService {
  constructor(private readonly voluntaryRepository: VoluntaryRepository) {}
  async create(
    createVoluntaryDto: CreateVoluntaryDto,
  ): Promise<SuccessResponseDTO> {
    await this.voluntaryRepository.create<Prisma.VoluntaryRequestUncheckedCreateInput>(
      createVoluntaryDto,
    );
    return { success: true };
  }

  findAll(options: IFilterGetUsers) {
    return this.voluntaryRepository.findAll(options);
  }

  async findOne(id: string) {
    const voluntary = await this.voluntaryRepository.find<
      Prisma.VoluntaryRequestWhereInput,
      Prisma.VoluntaryRequestInclude
    >({
      id,
    });
    if (!voluntary) throw new BadRequestException('Voluntário não encontrado');
    return voluntary;
  }

  update(id: string, updateVoluntaryDto: UpdateVoluntaryDto) {
    return this.voluntaryRepository.update<
      Prisma.VoluntaryRequestUncheckedUpdateInput,
      Prisma.VoluntaryRequestWhereUniqueInput
    >(updateVoluntaryDto, { id });
  }

  async remove(id: string) {
    return this.voluntaryRepository.update<
      Prisma.VoluntaryRequestUncheckedUpdateInput,
      Prisma.VoluntaryRequestWhereUniqueInput
    >({ status: RequestStatus.REJECTED }, { id });
  }
}
