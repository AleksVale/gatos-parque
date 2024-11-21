import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { AdoptionResponseDto } from './dto/adoption-response.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';
import { Role } from 'src/public/role.enum';

const mockAdoptionService = {
  create: jest.fn().mockResolvedValue({ success: true }),
  update: jest.fn().mockResolvedValue({ success: true }),
  findAll: jest.fn().mockResolvedValue({
    data: [],
    meta: {
      total: 0,
      currentPage: 1,
      perPage: 10,
      lastPage: 1,
      prev: null,
      next: null,
    },
  }),
  findOne: jest.fn().mockResolvedValue({}),
  remove: jest.fn().mockResolvedValue({ success: true }),
};

describe('AdoptionController', () => {
  let controller: AdoptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdoptionController],
      providers: [
        {
          provide: AdoptionService,
          useValue: mockAdoptionService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<AdoptionController>(AdoptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new adoption', async () => {
    const createAdoptionDto: CreateAdoptionDto = {
      userId: 'user-id',
      catId: 'cat-id',
      addressId: 'address-id',
      status: 'PENDING',
    };
    expect(await controller.create(createAdoptionDto)).toEqual({ success: true });
    expect(mockAdoptionService.create).toHaveBeenCalledWith(createAdoptionDto);
  });

  it('should update an adoption', async () => {
    const updateAdoptionDto: UpdateAdoptionDto = {
      userId: 'updated-user-id',
      catId: 'updated-cat-id',
      addressId: 'updated-address-id',
      status: 'APPROVED',
    };
    const id = 'some-id';
    expect(await controller.update(id, updateAdoptionDto)).toEqual({ success: true });
    expect(mockAdoptionService.update).toHaveBeenCalledWith(id, updateAdoptionDto);
  });

  it('should return all adoptions', async () => {
    const result = {
      data: [],
      meta: {
        total: 0,
        currentPage: 1,
        perPage: 10,
        lastPage: 1,
        prev: null,
        next: null,
      },
    };
    expect(await controller.findAll(1, 10)).toEqual(result);
    expect(mockAdoptionService.findAll).toHaveBeenCalledWith({ page: 1, perPage: 10 });
  });

  it('should return one adoption', async () => {
    const id = 'some-id';
    const result = {};
    expect(await controller.findOne(id)).toEqual(result);
    expect(mockAdoptionService.findOne).toHaveBeenCalledWith(id);
  });

  it('should remove an adoption', async () => {
    const id = 'some-id';
    expect(await controller.remove(id)).toEqual({ success: true });
    expect(mockAdoptionService.remove).toHaveBeenCalledWith(id);
  });
});
