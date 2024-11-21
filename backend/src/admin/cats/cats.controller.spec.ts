import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  const mockCatsService = {
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: mockCatsService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a cat', async () => {
      const createCatDto: CreateCatDto = {
        name: 'Tom',
        age: 3,
        description: 'description',
        status: 'ACTIVE',
      };
      await controller.create(createCatDto);
      expect(service.create).toHaveBeenCalledWith(createCatDto);
    });
  });

  describe('update', () => {
    it('should update a cat', async () => {
      const updateCatDto: UpdateCatDto = {
        name: 'Tom',
        age: 4,
        description: 'description',
        status: 'ACTIVE',
      };
      const id = '1';
      await controller.update(id, updateCatDto);
      expect(service.update).toHaveBeenCalledWith(id, updateCatDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [
        { name: 'Tom', age: 3, description: 'description', status: 'ACTIVE' },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result as any);
      expect(await controller.findAll(1, 10)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single cat', async () => {
      const result = {
        name: 'Tom',
        age: 3,
        description: 'description',
        status: 'ACTIVE',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result as any);
      expect(await controller.findOne('1')).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a cat', async () => {
      const id = '1';
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
