import { Test, TestingModule } from '@nestjs/testing';
import { AutocompleteController } from './autocomplete.controller';
import { AutocompleteService } from './autocomplete.service';

describe('AutocompleteController', () => {
  let controller: AutocompleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutocompleteController],
      providers: [AutocompleteService],
    }).compile();

    controller = module.get<AutocompleteController>(AutocompleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
