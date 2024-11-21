import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { CatsRepository } from 'src/repositories/cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { BadRequestException } from '@nestjs/common';
import { CatStatus } from '@prisma/client';

const validCat = {
  name: 'Tom',
  age: 3,
  description: 'description',
  status: CatStatus.ACTIVE,
};

describe('CatsService', () => {
  let service: CatsService;
  let repository: CatsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: CatsRepository,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
    repository = module.get<CatsRepository>(CatsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a cat and return success response', async () => {
      const createCatDto: CreateCatDto = {
        name: 'Tom',
        age: 3,
        description: '',
        status: 'ACTIVE',
      };
      jest.spyOn(repository, 'create').mockResolvedValueOnce(validCat as any);

      const result = await service.create(createCatDto);

      expect(repository.create).toHaveBeenCalledWith(createCatDto);
      expect(result).toEqual({ success: true });
    });
  });

  describe('findAll', () => {
    it('should return all cats', async () => {
      const options = { status: CatStatus.ACTIVE };
      const cats = [{ id: '1', name: 'Tom', age: 3, status: CatStatus.ACTIVE }];
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce(cats as any);

      const result = await service.findAll(options as any);

      expect(repository.findAll).toHaveBeenCalledWith(options);
      expect(result).toEqual(cats);
    });
  });

  describe('findOne', () => {
    it('should return a cat if found', async () => {
      const cat = { id: '1', name: 'Tom', age: 3, status: CatStatus.ACTIVE };
      jest.spyOn(repository, 'find').mockResolvedValueOnce(cat as any);

      const result = await service.findOne('1');

      expect(repository.find).toHaveBeenCalledWith({ id: '1' });
      expect(result).toEqual(cat);
    });

    it('should throw BadRequestException if cat not found', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(null);

      await expect(service.findOne('1')).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a cat', async () => {
      const updateCatDto: UpdateCatDto = { name: 'Tommy' };
      jest.spyOn(repository, 'update').mockResolvedValueOnce(undefined);

      await service.update('1', updateCatDto);

      expect(repository.update).toHaveBeenCalledWith(updateCatDto, { id: '1' });
    });
  });

  describe('remove', () => {
    it('should disable a cat', async () => {
      jest.spyOn(repository, 'update').mockResolvedValueOnce(undefined);

      await service.remove('1');

      expect(repository.update).toHaveBeenCalledWith(
        { status: CatStatus.DISABLED },
        { id: '1' },
      );
    });
  });
});
