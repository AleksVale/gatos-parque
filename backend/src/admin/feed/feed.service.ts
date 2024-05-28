import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedRepository } from 'src/repositories/feed.repository';
import { IFilterGetUsers } from '../user/user.service';
import { Prisma } from '@prisma/client';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { TokenPayload } from 'src/public/auth/jwt.strategy';

@Injectable()
export class FeedService {
  constructor(private readonly feedRepository: FeedRepository) {}

  async create(
    createFeedDto: CreateFeedDto,
    user: TokenPayload,
  ): Promise<SuccessResponseDTO> {
    await this.feedRepository.create<Prisma.FeedUncheckedCreateInput>({
      ...createFeedDto,
      userId: user.id,
      status: true,
    });
    return { success: true };
  }

  findAll({ page, perPage }: IFilterGetUsers) {
    return this.feedRepository.findAll({ page, perPage });
  }

  findOne(id: string) {
    return this.feedRepository.find<Prisma.UserWhereInput, Prisma.UserInclude>({
      id,
    });
  }

  update(id: string, updateFeedDto: UpdateFeedDto) {
    return this.feedRepository.update<
      Prisma.UserUncheckedUpdateInput,
      Prisma.UserWhereUniqueInput
    >(
      {
        ...updateFeedDto,
      },
      { id },
    );
  }

  async updateStatus(id: string) {
    const statusAtual = await this.feedRepository.find<
      Prisma.UserWhereInput,
      Prisma.UserInclude
    >({ id });

    if (!statusAtual) {
      throw new BadRequestException('Postagem não encontrada');
    }
    return this.feedRepository.update<
      Prisma.FeedUncheckedUpdateInput,
      Prisma.FeedWhereUniqueInput
    >(
      {
        status: !statusAtual.status,
      },
      {
        id,
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
