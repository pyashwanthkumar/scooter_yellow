import { Test, TestingModule } from '@nestjs/testing';
import { GradeTestService } from './grade_test.service';

describe('GradeTestService', () => {
  let service: GradeTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradeTestService],
    }).compile();

    service = module.get<GradeTestService>(GradeTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
