import { Test, TestingModule } from '@nestjs/testing';
import { CreateTestController } from './create_test.controller';

describe('CreateTestController', () => {
  let controller: CreateTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTestController],
    }).compile();

    controller = module.get<CreateTestController>(CreateTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
