import { Module } from '@nestjs/common';
import { GiveTestService } from './give_test.service';
import { GiveTestController } from './give_test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GiveTest, GiveTestSchema } from './models/give_test.schema';
import { GiveTestRepository } from './give_test.repository';
import { CreateTest, CreateTestSchema } from 'src/create_test/models/create_test.schema';
import { TestReport, TestReportSchema } from 'src/test_report/models/test_report.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name : GiveTest.name,
      schema : GiveTestSchema
    },{
      name : CreateTest.name,
      schema : CreateTestSchema
    },{
      name : TestReport.name,
      schema : TestReportSchema
    }])
  ],
  providers: [GiveTestService, GiveTestRepository],
  controllers: [GiveTestController]
})
export class GiveTestModule {}
