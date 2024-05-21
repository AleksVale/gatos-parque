import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

// teste unitario aq 100% da service de cov

import { UserRepository } from 'src/repositories/user.repository';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { User, UserStatus } from '@prisma/client';
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
describe('UserService', () => {
  let service: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a user', async () => {
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);
    jest.spyOn(userRepository, 'create').mockResolvedValueOnce({} as any);
    expect(await service.create(validUser)).toEqual({ success: true });
  });
  it('should throw error creating a user when document invalid', async () => {
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);
    jest.spyOn(userRepository, 'create').mockResolvedValueOnce({} as any);
    const mockedFunc = async () =>
      await service.create({ ...validUser, document: '123456789' });
    expect(mockedFunc).rejects.toThrow('CPF inválido');
  });

  it('should throw error creating a user when email repeated', async () => {
    jest
      .spyOn(userRepository, 'findByEmail')
      .mockResolvedValueOnce(validUser as any);
    jest.spyOn(userRepository, 'create').mockResolvedValueOnce({} as any);
    const mockedFunc = async () => await service.create(validUser);
    expect(mockedFunc).rejects.toThrow('Email já cadastrado');
  });
  it('should return the getted user', async () => {
    jest
      .spyOn(userRepository, 'find')
      .mockResolvedValueOnce(validUser as unknown as User);
    expect(await service.findOne('123')).toEqual(validUser);
  });

  it('should throw error when user not found', async () => {
    jest.spyOn(userRepository, 'find').mockResolvedValueOnce(null as any);
    const mockedFunc = async () => await service.findOne('123');
    expect(mockedFunc).rejects.toThrow('Usuário não encontrado');
  });

  it('should update a user', async () => {
    jest
      .spyOn(userRepository, 'update')
      .mockResolvedValueOnce(validUser as any);
    expect(await service.update('123', validUser)).toEqual(validUser);
    expect(userRepository.update).toHaveBeenCalledWith(validUser, {
      id: '123',
    });
  });
  it('should block a user when call delete', async () => {
    jest
      .spyOn(userRepository, 'update')
      .mockResolvedValueOnce(validUser as any);
    expect(await service.remove('123')).toEqual(validUser);
    expect(userRepository.update).toHaveBeenCalledWith(
      { status: UserStatus.BLOCKED },
      { id: '123' },
    );
  });
  it('should return all users', async () => {
    jest.spyOn(userRepository, 'findAll').mockResolvedValueOnce({
      data: [validUser as any],
      meta: {
        total: 1,
        currentPage: 1,
        perPage: 10,
        lastPage: 1,
        prev: null,
        next: null,
      },
    });
    expect(await service.findAll({ page: 1, perPage: 10 })).toEqual({
      data: [validUser as any],
      meta: {
        total: 1,
        currentPage: 1,
        perPage: 10,
        lastPage: 1,
        prev: null,
        next: null,
      },
    });
  });
});
