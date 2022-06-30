import { Test, TestingModule } from '@nestjs/testing';
import { GiveTestService } from './give_test.service';

describe('GiveTestService', () => {
  let service: GiveTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiveTestService],
    }).compile();

    service = module.get<GiveTestService>(GiveTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
