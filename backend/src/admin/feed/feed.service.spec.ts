import { Test, TestingModule } from '@nestjs/testing';
import { FeedService } from './feed.service';
import { FeedRepository } from 'src/repositories/feed.repository';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { IFilterGetUsers } from '../user/user.service';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
import { PrismaService } from 'src/public/prisma/prisma.service';

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

describe('FeedService', () => {
  let service: FeedService;
  let feedRepository: FeedRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedService, FeedRepository, PrismaService],
    }).compile();

    service = module.get<FeedService>(FeedService);
    feedRepository = module.get<FeedRepository>(FeedRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new feed', async () => {
    jest.spyOn(feedRepository, 'create').mockResolvedValueOnce({} as any);
    const createFeedDto: CreateFeedDto = {
      title: 'Test title',
      description: 'Test content',
    };
    const user: TokenPayload = objeto;
    expect(await service.create(createFeedDto, user)).toEqual({
      success: true,
    });
  });

  it('should find all feeds', async () => {
    jest
      .spyOn(feedRepository, 'findAll')
      .mockResolvedValueOnce([validFeed] as any);
    const filters: IFilterGetUsers = { page: 1, perPage: 10 };
    expect(await service.findAll(filters)).toEqual([validFeed]);
  });

  it('should find one feed by id', async () => {
    jest.spyOn(feedRepository, 'find').mockResolvedValueOnce(validFeed as any);
    expect(await service.findOne('1')).toEqual(validFeed);
  });

  it('should update a feed', async () => {
    jest.spyOn(feedRepository, 'update').mockResolvedValueOnce(validFeed);
    const updateFeedDto: UpdateFeedDto = { title: 'Updated title' };
    expect(await service.update('1', updateFeedDto)).toEqual(validFeed);
  });

  it('should update the status of a feed', async () => {
    const currentFeed = { ...validFeed, status: true };
    jest
      .spyOn(feedRepository, 'find')
      .mockResolvedValueOnce(currentFeed as any);
    jest
      .spyOn(feedRepository, 'update')
      .mockResolvedValueOnce({ ...currentFeed, status: !currentFeed.status });
    expect(await service.updateStatus('1')).toEqual({
      ...currentFeed,
      status: false,
    });
  });

  it('should throw error when feed not found for status update', async () => {
    jest.spyOn(feedRepository, 'find').mockResolvedValueOnce(null);
    await expect(service.updateStatus('1')).rejects.toThrow(
      'Postagem não encontrada',
    );
  });
});
