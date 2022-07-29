import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestReport, TestReportSchema } from './models/test_report.schema';
import { TestReportController } from './test_report.controller';
import { TestReportRepository } from './test_report.repository';
import { TestReportService } from './test_report.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: TestReport.name,
    schema: TestReportSchema
  }])],
  controllers: [TestReportController],
  providers: [TestReportService, TestReportRepository],
})
export class TestReportModule {}
