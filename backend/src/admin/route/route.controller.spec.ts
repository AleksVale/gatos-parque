import { Test, TestingModule } from '@nestjs/testing';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';
import { Role } from 'src/public/role.enum';

const mockRouteService = {
  create: jest.fn().mockResolvedValue({ success: true }),
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
  findOne: jest.fn().mockResolvedValue({ id: 1, name: 'Test Route' }),
  update: jest.fn().mockResolvedValue({ success: true }),
  remove: jest.fn().mockResolvedValue({ success: true }),
};

describe('RouteController', () => {
  let controller: RouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteController],
      providers: [
        {
          provide: RouteService,
          useValue: mockRouteService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<RouteController>(RouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new route', async () => {
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

    expect(await controller.create(createRouteDto)).toEqual({ success: true });
    expect(mockRouteService.create).toHaveBeenCalledWith(createRouteDto);
  });

  it('should return all routes', async () => {
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
    expect(mockRouteService.findAll).toHaveBeenCalledWith({ page: 1, perPage: 10 });
  });

  it('should return one route', async () => {
    const id = '1';
    const result = { id: 1, name: 'Test Route' };

    expect(await controller.findOne(id)).toEqual(result);
    expect(mockRouteService.findOne).toHaveBeenCalledWith(+id);
  });

  it('should update a route', async () => {
    const updateRouteDto: UpdateRouteDto = {
      name: 'Updated Route',
    };
    const id = '1';

    expect(await controller.update(id, updateRouteDto)).toEqual({ success: true });
    expect(mockRouteService.update).toHaveBeenCalledWith(+id, updateRouteDto);
  });

  it('should remove a route', async () => {
    const id = '1';

    expect(await controller.remove(id)).toEqual({ success: true });
    expect(mockRouteService.remove).toHaveBeenCalledWith(+id);
  });
});
