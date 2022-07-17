import { Test, TestingModule } from '@nestjs/testing';
import { GradeTestController } from './grade_test.controller';

describe('GradeTestController', () => {
  let controller: GradeTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradeTestController],
    }).compile();

    controller = module.get<GradeTestController>(GradeTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
