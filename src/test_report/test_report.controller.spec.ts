import { Test, TestingModule } from '@nestjs/testing';
import { TestReportController } from './test_report.controller';

describe('TestReportController', () => {
  let controller: TestReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestReportController],
    }).compile();

    controller = module.get<TestReportController>(TestReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
