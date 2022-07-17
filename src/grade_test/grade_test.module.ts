import { Module } from '@nestjs/common';
import { GradeTestController } from './grade_test.controller';
import { GradeTestService } from './grade_test.service';

@Module({
  controllers: [GradeTestController],
  providers: [GradeTestService]
})
export class GradeTestModule {}
