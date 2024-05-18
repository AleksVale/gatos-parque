import { Test, TestingModule } from '@nestjs/testing';

// teste unitario aq 100% da service de cov
import { PrismaService } from 'src/public/prisma/prisma.service';
import { Cat, CatStatus } from '@prisma/client';
import { CatsService } from './cats.service';
import { CatsRepository } from 'src/repositories/cats.repository';
const validCat: Omit<Cat, 'id' | 'createdAt' | 'updatedAt'> = {
  name: 'Cat1',
  age: 1,
  description: 'teste1',
  status: CatStatus.ACTIVE,
  photoKey: null,
};
describe('CatService', () => {
  let service: CatsService;
  let catRepository: CatsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, CatsRepository, PrismaService],
    }).compile();

    service = module.get<CatsService>(CatsService);
    catRepository = module.get<CatsRepository>(CatsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cat', async () => {
    jest.spyOn(catRepository, 'create').mockResolvedValueOnce({} as any);
    expect(await service.create(validCat)).toEqual({ success: true });
  });

  it('should return the getted cat', async () => {
    jest
      .spyOn(catRepository, 'find')
      .mockResolvedValueOnce(validCat as unknown as Cat);
    expect(await service.findOne('123')).toEqual(validCat);
  });

  it('should throw error when cat not found', async () => {
    jest.spyOn(catRepository, 'find').mockResolvedValueOnce(null as any);
    const mockedFunc = async () => await service.findOne('123');
    expect(mockedFunc).rejects.toThrow('Gato não encontrado');
  });

  it('should update a cat', async () => {
    jest.spyOn(catRepository, 'update').mockResolvedValueOnce(validCat as any);
    expect(await service.update('123', validCat)).toEqual(validCat);
    expect(catRepository.update).toHaveBeenCalledWith(validCat, {
      id: '123',
    });
  });

  it('should block a cat when call delete', async () => {
    jest.spyOn(catRepository, 'update').mockResolvedValueOnce(validCat as any);
    expect(await service.remove('123')).toEqual(validCat);
    expect(catRepository.update).toHaveBeenCalledWith(
      { status: CatStatus.DISABLED },
      { id: '123' },
    );
  });

  it('should return all cats', async () => {
    jest.spyOn(catRepository, 'findAll').mockResolvedValueOnce({
      data: [validCat as any],
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
      data: [validCat as any],
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
