import { Test, TestingModule } from '@nestjs/testing';
import { CreateTestService } from './create_test.service';

describe('CreateTestService', () => {
  let service: CreateTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTestService],
    }).compile();

    service = module.get<CreateTestService>(CreateTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
