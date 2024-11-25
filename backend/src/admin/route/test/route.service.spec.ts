import { Test, TestingModule } from '@nestjs/testing';
import { RouteService } from '../route.service';
import { RouteRepository } from 'src/repositories/route.repository';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { RequestStatus } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';
import { CreateRouteDto } from '../dto/create-route.dto';
import { UpdateRouteDto } from '../dto/update-route.dto';

const mockRouteRepository = {
  create: jest.fn(),
  createRoutePoints: jest.fn(),
  findAll: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('RouteService', () => {
  let service: RouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RouteService,
        {
          provide: RouteRepository,
          useValue: mockRouteRepository,
        },
      ],
    }).compile();

    service = module.get<RouteService>(RouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new route and its points', async () => {
      const createRouteDto: CreateRouteDto = {
        name: 'Test Route',
        userId: 'user-id',
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: true,
        saturday: false,
        sunday: true,
        points: [1, 2, 3],
      };
      const createdRoute = { id: 1, name: createRouteDto.name };

      mockRouteRepository.create.mockResolvedValue(createdRoute);

      await service.create(createRouteDto);

      expect(mockRouteRepository.create).toHaveBeenCalledWith({
        name: createRouteDto.name,
        userId: createRouteDto.userId,
        monday: createRouteDto.monday,
        tuesday: createRouteDto.tuesday,
        wednesday: createRouteDto.wednesday,
        thursday: createRouteDto.thursday,
        friday: createRouteDto.friday,
        saturday: createRouteDto.saturday,
        sunday: createRouteDto.sunday,
      });

      expect(mockRouteRepository.createRoutePoints).toHaveBeenCalledWith(
        createdRoute.id,
        createRouteDto.points,
      );
    });
  });

  describe('findAll', () => {
    it('should return all routes', async () => {
      const options = { page: 1, perPage: 10 };
      const result = { data: [], meta: { total: 0, currentPage: 1 } };

      mockRouteRepository.findAll.mockResolvedValue(result);

      expect(await service.findAll(options)).toEqual(result);
      expect(mockRouteRepository.findAll).toHaveBeenCalledWith(options);
    });
  });

  describe('findOne', () => {
    it('should return a specific route', async () => {
      const id = 1;
      const result = { id, name: 'Test Route', userId: 'user-id' };

      mockRouteRepository.find.mockResolvedValue(result);

      expect(await service.findOne(id)).toEqual(result);
      expect(mockRouteRepository.find).toHaveBeenCalledWith(
        { id },
        { RoutePoint: true, user: true },
      );
    });
  });

  describe('update', () => {
    it('should update a route', async () => {
      const id = 1;
      const updateRouteDto: UpdateRouteDto = { name: 'Updated Name' };
      const result = { id, ...updateRouteDto };

      mockRouteRepository.update.mockResolvedValue(result);

      expect(await service.update(id, updateRouteDto)).toEqual(result);
      expect(mockRouteRepository.update).toHaveBeenCalledWith(updateRouteDto, {
        id,
      });
    });
  });

  describe('remove', () => {
    it('should remove a route', async () => {
      const id = 1;
      const result = { success: true };

      mockRouteRepository.delete.mockResolvedValue(result);

      expect(await service.remove(id)).toEqual(result);
      expect(mockRouteRepository.delete).toHaveBeenCalledWith({ id });
    });
  });
});