import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionService } from './adoption.service';
import { AdoptionRepository } from 'src/repositories/adoption.repository';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { RequestStatus } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';

const validAdoption = {
  id: '123',
  userId: 'user-id-123',
  catId: 'cat-id-123',
  addressId: 'address-id-123',
  status: RequestStatus.PENDING,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('AdoptionService', () => {
  let service: AdoptionService;
  let adoptionRepository: AdoptionRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdoptionService, AdoptionRepository, PrismaService],
    }).compile();

    service = module.get<AdoptionService>(AdoptionService);
    adoptionRepository = module.get<AdoptionRepository>(AdoptionRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an adoption', async () => {
    jest.spyOn(adoptionRepository, 'create').mockResolvedValueOnce(validAdoption as any);
    const createAdoptionDto: CreateAdoptionDto = {
      userId: 'user-id-123',
      catId: 'cat-id-123',
      addressId: 'address-id-123',
      status: RequestStatus.PENDING,
    };
    expect(await service.create(createAdoptionDto)).toEqual({ success: true });
  });

  it('should return all adoptions', async () => {
    const adoptionList = [validAdoption];
    jest.spyOn(adoptionRepository, 'findAll').mockResolvedValueOnce({
      data: adoptionList,
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
      data: adoptionList,
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

  it('should return a single adoption by id', async () => {
    jest.spyOn(adoptionRepository, 'find').mockResolvedValueOnce(validAdoption as any);
    expect(await service.findOne('123')).toEqual(validAdoption);
  });

  it('should throw an error if adoption not found', async () => {
    jest.spyOn(adoptionRepository, 'find').mockResolvedValueOnce(null as any);
    const mockedFunc = async () => await service.findOne('123');
    expect(mockedFunc).rejects.toThrow('Adoção não encontrada');
  });

  it('should update an adoption', async () => {
    const updateAdoptionDto = { status: RequestStatus.APPROVED };
    jest.spyOn(adoptionRepository, 'update').mockResolvedValueOnce({ ...validAdoption, ...updateAdoptionDto } as any);
    expect(await service.update('123', updateAdoptionDto)).toEqual({ ...validAdoption, ...updateAdoptionDto });
    expect(adoptionRepository.update).toHaveBeenCalledWith(updateAdoptionDto, { id: '123' });
  });

  it('should reject an adoption when remove is called', async () => {
    jest.spyOn(adoptionRepository, 'update').mockResolvedValueOnce({ ...validAdoption, status: RequestStatus.REJECTED } as any);
    expect(await service.remove('123')).toEqual({ ...validAdoption, status: RequestStatus.REJECTED });
    expect(adoptionRepository.update).toHaveBeenCalledWith({ status: RequestStatus.REJECTED }, { id: '123' });
  });
});
