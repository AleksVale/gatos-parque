import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserAdminDTO } from './dto/create-user.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { Prisma, UserStatus } from '@prisma/client';
import { Validator } from 'src/utils/validation';
import { UpdateUserAdminDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import * as dayjs from 'dayjs';
export interface IFilterGetUsers {
  page: number;
  perPage: number;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserAdminDTO): Promise<SuccessResponseDTO> {
    const user = await this.findByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException('Email já cadastrado');
    }
    if (!Validator.validateCPF(createUserDto.document)) {
      throw new BadRequestException('CPF inválido');
    }
    const hashedPass = await bcrypt.hash(createUserDto.password, 10);
    await this.userRepository.create<Prisma.UserUncheckedCreateInput>({
      ...createUserDto,
      dateOfBirth: new Date(createUserDto.dateOfBirth),
      password: hashedPass,
    });
    return { success: true };
  }

  update(id: string, updateUserDto: UpdateUserAdminDTO) {
    return this.userRepository.update<
      Prisma.UserUncheckedUpdateInput,
      Prisma.UserWhereUniqueInput
    >(
      {
        ...updateUserDto,
        dateOfBirth: dayjs(updateUserDto.dateOfBirth).toDate(),
      },
      { id },
    );
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  findAll(options: IFilterGetUsers) {
    return this.userRepository.findAll(options);
  }

  async findOne(id: string) {
    const user = await this.userRepository.find<
      Prisma.UserWhereInput,
      Prisma.UserInclude
    >({
      id,
    });
    if (!user) throw new BadRequestException('Usuário não encontrado');
    return user;
  }

  remove(id: string) {
    return this.userRepository.update<
      Prisma.UserUncheckedUpdateInput,
      Prisma.UserWhereUniqueInput
    >({ status: UserStatus.BLOCKED }, { id });
  }
}
