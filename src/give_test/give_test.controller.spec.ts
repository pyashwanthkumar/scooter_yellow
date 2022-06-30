import { Test, TestingModule } from '@nestjs/testing';
import { GiveTestController } from './give_test.controller';

describe('GiveTestController', () => {
  let controller: GiveTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiveTestController],
    }).compile();

    controller = module.get<GiveTestController>(GiveTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
