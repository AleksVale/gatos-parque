import { Test, TestingModule } from '@nestjs/testing';
import { SupporterService } from './supporter.service';
import { UserRepository } from 'src/repositories/user.repository';
import { UserStatus } from '@prisma/client';

const validUser = {
  email: 'example@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '123456789',
  dateOfBirth: '1990-01-01',
  document: '80984422099',
  status: UserStatus.ACTIVE,
  password: 'Password1',
  photoKey: null,
  addressId: null,
  roleId: '123e4567-e89b-12d3-a456-426614174000',
};

describe('SupporterService', () => {
  let service: SupporterService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupporterService, UserRepository],
    }).compile();

    service = module.get<SupporterService>(SupporterService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a user', () => {
    jest.spyOn(userRepository, 'find').mockResolvedValueOnce(validUser as any);
    expect(service.findOne(1)).toEqual(validUser);
  });
});
