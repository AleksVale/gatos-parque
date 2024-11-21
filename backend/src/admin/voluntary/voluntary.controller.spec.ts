import { Test, TestingModule } from '@nestjs/testing';
import { VoluntaryController } from './voluntary.controller';
import { VoluntaryService } from './voluntary.service';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { VoluntaryResponseDto } from './dto/voluntary-response.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';

describe('VoluntaryController', () => {
  let controller: VoluntaryController;
  let service: VoluntaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoluntaryController],
      providers: [
        {
          provide: VoluntaryService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<VoluntaryController>(VoluntaryController);
    service = module.get<VoluntaryService>(VoluntaryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a voluntary and return success response', async () => {
      const createVoluntaryDto: CreateVoluntaryDto = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        document: '123456789',
        reason: 'Volunteering to help in community events',
        status: 'APPROVED',
        addressId: 'address123',
      };
      const result: SuccessResponseDTO = { success: true };
      jest.spyOn(service, 'create').mockResolvedValueOnce(result);

      expect(await controller.create(createVoluntaryDto)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update a voluntary and return success response', async () => {
      const id = 'someId';
      const updateVoluntaryDto: UpdateVoluntaryDto = {
        firstName: 'Jane',
        lastName: 'Doe',
        dateOfBirth: '1991-01-01',
        document: '987654321',
        reason: 'Updated reason',
        status: 'APPROVED',
        addressId: 'address456',
      };
      const result: SuccessResponseDTO = { success: true };
      jest.spyOn(service, 'update').mockResolvedValueOnce(result);

      expect(await controller.update(id, updateVoluntaryDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return a paginated result of voluntaries', async () => {
      const result = {
        data: [],
        page: 1,
        perPage: 10,
        total: 0,
        meta: {
          itemCount: 0,
          totalItems: 0,
          itemsPerPage: 10,
          totalPages: 0,
          currentPage: 1,
          total: 0,
          lastPage: 0,
          prev: null,
          next: null,
        },
      };
  
      jest.spyOn(service, 'findAll').mockResolvedValueOnce(result as any);
  
      expect(await controller.findAll(1, 10)).toEqual(result);
    });
  });
  

  describe('findOne', () => {
    it('should return a voluntary', async () => {
        const id = 'someId'
        const result: VoluntaryResponseDto = {
            id: 'someId',
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: new Date('1990-01-01'),
            document: '123456789',
            reason: 'Volunteering to help in community events',
            status: 'APPROVED',
            addressId: 'address123',
            photoKey: 'photo123',
            createdAt: new Date(), 
            updatedAt: new Date(), 
          };
      jest.spyOn(service, 'findOne').mockResolvedValueOnce(result);

      expect(await controller.findOne(id)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove a voluntary and return success response', async () => {
      const id = 'someId';
      const result: SuccessResponseDTO = { success: true };
      jest.spyOn(service, 'remove').mockResolvedValueOnce(result);

      expect(await controller.remove(id)).toEqual(result);
    });
  });
});
