import { Test, TestingModule } from '@nestjs/testing';
import { PointsService } from './points.service';
import { PointRepository } from 'src/repositories/point.repository';
import { BadRequestException } from '@nestjs/common';

describe('PointsService', () => {
  let service: PointsService;
  let repository: PointRepository;

  const mockPoint = {
    id: 1,
    name: 'Sample Point',
    reference: 'Sample Reference',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PointsService,
        {
          provide: PointRepository,
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PointsService>(PointsService);
    repository = module.get<PointRepository>(PointRepository);
  });

  describe('validatePointName', () => {
    it('should throw BadRequestException if point name already exists', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(mockPoint);

      await expect(service.validatePointName(mockPoint.name)).rejects.toThrow(
        new BadRequestException(`Ponto com o nome ${mockPoint.name} já existe`),
      );
    });

    it('should not throw any exception if point name does not exist', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(null);

      await expect(
        service.validatePointName('New Point'),
      ).resolves.not.toThrow();
    });
  });

  describe('create', () => {
    it('should create a point if the name is valid', async () => {
      const createPointDto = {
        name: 'New Point',
        reference: 'Sample Reference',
      };

      jest.spyOn(service, 'validatePointName').mockResolvedValueOnce(undefined);
      jest.spyOn(repository, 'create').mockResolvedValueOnce(mockPoint);

      const result = await service.create(createPointDto);
      expect(result).toEqual(mockPoint);
      expect(repository.create).toHaveBeenCalledWith(createPointDto);
    });

    it('should throw BadRequestException if the name is invalid', async () => {
      const createPointDto = {
        name: 'Existing Point',
        reference: 'Sample Reference',
      };

      jest
        .spyOn(service, 'validatePointName')
        .mockRejectedValueOnce(
          new BadRequestException('Ponto com o nome Existing Point já existe'),
        );

      await expect(service.create(createPointDto)).rejects.toThrow(
        new BadRequestException('Ponto com o nome Existing Point já existe'),
      );
    });
  });

  describe('findAll', () => {
    it('should return all points based on filter options', async () => {
      const options = { limit: 10, offset: 0 };
      const points = [mockPoint];

      jest.spyOn(repository, 'findAll').mockResolvedValueOnce(points as any);

      const result = await service.findAll(options as any);
      expect(result).toEqual(points);
      expect(repository.findAll).toHaveBeenCalledWith(options);
    });
  });

  describe('findOne', () => {
    it('should return a point if it exists', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(mockPoint);

      const result = await service.findOne(mockPoint.id);
      expect(result).toEqual(mockPoint);
    });

    it('should throw BadRequestException if the point does not exist', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(null);

      const func = async () => await service.findOne(mockPoint.id);
      await expect(func).rejects.toThrow(BadRequestException);
    });
  });

  describe('update', () => {
    it('should update a point if the name is valid', async () => {
      const updatePointDto = {
        name: 'Updated Point',
        reference: 'Updated Reference',
      };
      const updatedPoint = { ...mockPoint, ...updatePointDto };

      jest.spyOn(service, 'validatePointName').mockResolvedValueOnce(undefined);
      jest.spyOn(repository, 'update').mockResolvedValueOnce(updatedPoint);

      const result = await service.update(mockPoint.id, updatePointDto);
      expect(result).toEqual(updatedPoint);
      expect(repository.update).toHaveBeenCalledWith(updatePointDto, {
        id: mockPoint.id,
      });
    });

    it('should throw BadRequestException if the name is invalid', async () => {
      const updatePointDto = {
        name: 'Existing Point',
        reference: 'Updated Reference',
      };

      jest
        .spyOn(service, 'validatePointName')
        .mockRejectedValueOnce(
          new BadRequestException('Ponto com o nome Existing Point já existe'),
        );

      await expect(
        service.update(mockPoint.id, updatePointDto),
      ).rejects.toThrow(
        new BadRequestException('Ponto com o nome Existing Point já existe'),
      );
    });
  });

  describe('remove', () => {
    it('should remove a point', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValueOnce(mockPoint);

      const result = await service.remove(mockPoint.id);
      expect(result).toEqual(mockPoint);
      expect(repository.delete).toHaveBeenCalledWith({ id: mockPoint.id });
    });
  });
});
