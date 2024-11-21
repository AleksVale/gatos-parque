import { Test, TestingModule } from '@nestjs/testing';
import { VoluntaryService } from './voluntary.service';
import { VoluntaryRepository } from 'src/repositories/voluntary.repository';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { BadRequestException } from '@nestjs/common';
import { Prisma, RequestStatus } from '@prisma/client';

describe('VoluntaryService', () => {
  let service: VoluntaryService;
  let repository: VoluntaryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VoluntaryService,
        {
          provide: VoluntaryRepository,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<VoluntaryService>(VoluntaryService);
    repository = module.get<VoluntaryRepository>(VoluntaryRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a voluntary and return success response', async () => {
      const createVoluntaryDto: CreateVoluntaryDto = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        document: '123456789',
        reason: 'Volunteering to help in community events',
        status: RequestStatus.APPROVED,
        addressId: 'address123',
      };
  
      (repository.create as jest.Mock).mockResolvedValueOnce(undefined);
  
      const result: SuccessResponseDTO = await service.create(createVoluntaryDto);
      expect(result).toEqual({ success: true });
      expect(repository.create).toHaveBeenCalledWith(createVoluntaryDto);
    });
  });
  
  describe('findAll', () => {
    it('should return all voluntaries', async () => {
      const options = { status: 'ACTIVE' }; 
      const voluntaries = [
        { id: '1', name: 'John Doe', age: 30, status: 'ACTIVE' },
      ]; 
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce(voluntaries as any);
  
      const result = await service.findAll(options as any);
  
      expect(repository.findAll).toHaveBeenCalledWith(options);
  
      expect(result).toEqual(voluntaries);
    });
  });
  
  

  describe('findOne', () => {
    it('should return a voluntary if found', async () => {
      const id = 'someId';
      const findResult = {
        id: id,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date('1990-01-01'),
        document: '123456789',
        reason: 'Some reason',
        photoKey: null,
        status: RequestStatus.APPROVED,
        addressId: 'address123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(repository, 'find').mockResolvedValueOnce(findResult);

      const result = await service.findOne(id);
      expect(result).toEqual(findResult);
      expect(repository.find).toHaveBeenCalledWith({ id });
    });

    it('should throw BadRequestException if not found', async () => {
      const id = 'someId';
      jest.spyOn(repository, 'find').mockResolvedValueOnce(null);

      await expect(service.findOne(id)).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a voluntary and return the updated record', async () => {
      const id = 'someId';
      const updateVoluntaryDto: UpdateVoluntaryDto = {
        firstName: 'Jane',
        lastName: 'Doe',
        dateOfBirth: '1991-01-01',
        document: '987654321',
        reason: 'Updated reason',
        status: RequestStatus.APPROVED,
        addressId: 'address456',
      };

      const updateResult = { id, ...updateVoluntaryDto };
      jest.spyOn(repository, 'update').mockResolvedValueOnce(updateResult);

      const result = await service.update(id, updateVoluntaryDto);
      expect(result).toEqual(updateResult);
      expect(repository.update).toHaveBeenCalledWith(updateVoluntaryDto, { id });
    });
  });

  describe('remove', () => {
    it('should update the status to REJECTED and return the updated record', async () => {
      const id = 'someId';
      const updateResult = { id, status: RequestStatus.REJECTED };
      jest.spyOn(repository, 'update').mockResolvedValueOnce(updateResult);

      const result = await service.remove(id);
      expect(result).toEqual(updateResult);
      expect(repository.update).toHaveBeenCalledWith({ status: RequestStatus.REJECTED }, { id });
    });
  });
});
