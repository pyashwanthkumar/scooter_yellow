import { Module } from '@nestjs/common';
import { TestReportController } from './test_report.controller';
import { TestReportService } from './test_report.service';

@Module({
  controllers: [TestReportController],
  providers: [TestReportService]
})
export class TestReportModule {}
