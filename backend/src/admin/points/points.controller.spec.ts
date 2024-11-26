import { Test, TestingModule } from '@nestjs/testing';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';
import { BadRequestException } from '@nestjs/common';

describe('PointsController', () => {
  let controller: PointsController;
  let service: PointsService;

  const mockPoint = {
    id: 1,
    name: 'Sample Point',
    reference: 'Sample Reference',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointsController],
      providers: [
        PointsService,
        {
          provide: JwtAuthGuard,
          useValue: {
            canActivate: jest.fn().mockReturnValue(true),
          },
        },
        {
          provide: RoleGuard,
          useValue: {
            canActivate: jest.fn().mockReturnValue(true),
          },
        },
        {
          provide: PointsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PointsController>(PointsController);
    service = module.get<PointsService>(PointsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a point', async () => {
      const createPointDto: CreatePointDto = {
        name: 'New Point',
        reference: 'Sample Reference',
      };
      jest.spyOn(service, 'create').mockResolvedValue(mockPoint as any);

      const result = await controller.create(createPointDto);
      expect(result).toEqual({ success: true });
      expect(service.create).toHaveBeenCalledWith(createPointDto);
    });
  });

  describe('findAll', () => {
    it('should return all points', async () => {
      const points = [mockPoint];
      jest.spyOn(service, 'findAll').mockResolvedValue(points as any);

      const result = await controller.findAll(1, 10);
      expect(result).toEqual(points);
      expect(service.findAll).toHaveBeenCalledWith({ page: 1, perPage: 10 });
    });
  });

  describe('findOne', () => {
    it('should return a point by id', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(mockPoint as any);

      const result = await controller.findOne('1');
      expect(result).toEqual(mockPoint);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw BadRequestException if point not found', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValue(new BadRequestException());

      await expect(controller.findOne('1')).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('update', () => {
    it('should update a point', async () => {
      const updatePointDto: UpdatePointDto = {
        name: 'Updated Point',
        reference: 'Updated Reference',
      };
      jest.spyOn(service, 'update').mockResolvedValue(mockPoint as any);

      const result = await controller.update('1', updatePointDto);
      expect(result).toEqual({ success: true });
      expect(service.update).toHaveBeenCalledWith(1, updatePointDto);
    });
  });

  describe('remove', () => {
    it('should remove a point', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue(mockPoint as any);

      const result = await controller.remove('1');
      expect(result).toEqual({ success: true });
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
