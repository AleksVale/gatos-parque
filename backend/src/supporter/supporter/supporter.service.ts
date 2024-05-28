import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class SupporterService {
  constructor(private readonly userRepository: UserRepository) {}
  findOne(id: number) {
    return this.userRepository.find({ id });
  }
}
