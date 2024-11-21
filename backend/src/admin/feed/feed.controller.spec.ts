import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { JwtAuthGuard } from 'src/public/auth/jwt-auth.guard';
import { RoleGuard } from 'src/public/role/role.guard';
import { TokenPayload } from 'src/public/auth/jwt.strategy';

const validFeed = {
  title: 'Test title',
  content: 'Test content',
  userId: 1,
  status: true,
};
const objeto = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  sub: { name: 'John Doe', email: 'john.doe@example.com', profile: 'admin' },
};

describe('FeedController', () => {
  let controller: FeedController;
  let service: FeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [
        {
          provide: FeedService,
          useValue: {
            create: jest.fn().mockResolvedValue({ success: true }),
            findAll: jest.fn().mockResolvedValue([validFeed]),
            findOne: jest.fn().mockResolvedValue(validFeed),
            update: jest.fn().mockResolvedValue({ success: true }),
            updateStatus: jest.fn().mockResolvedValue({ success: true }),
            remove: jest.fn().mockResolvedValue({ success: true }),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<FeedController>(FeedController);
    service = module.get<FeedService>(FeedService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new feed', async () => {
    const createFeedDto: CreateFeedDto = {
      title: 'Test title',
      description: 'Test content',
    };
    const user: TokenPayload = objeto;
    await expect(controller.create(createFeedDto, user)).resolves.toEqual({
      success: true,
    });
  });

  it('should find all feeds', async () => {
    const result = [validFeed];
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(result as any);
    await expect(controller.findAll(1, 10)).resolves.toEqual(result);
  });

  it('should find one feed by id', async () => {
    const result = validFeed;
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(result as any);
    await expect(controller.findOne('1')).resolves.toEqual(result);
  });

  it('should update a feed', async () => {
    const updateFeedDto: UpdateFeedDto = { title: 'Updated title' };
    await expect(controller.update('1', updateFeedDto)).resolves.toEqual({
      success: true,
    });
  });

  it('should update the status of a feed', async () => {
    await expect(controller.updateStatus('1')).resolves.toEqual({
      success: true,
    });
  });

  it('should remove a feed', async () => {
    await expect(controller.remove('1')).resolves.toEqual({ success: true });
  });
});
