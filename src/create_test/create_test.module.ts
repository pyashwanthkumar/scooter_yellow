import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateTestController } from './create_test.controller';
import { CreateTestRepository } from './create_test.repository';
import { CreateTestService } from './create_test.service';
import { CreateTest, CreateTestSchema } from './models/create_test.schema';

@Module({
  imports : [
    MongooseModule.forFeature([{
      name : CreateTest.name,
      schema : CreateTestSchema
    }])
  ],
  controllers: [CreateTestController],
  providers: [CreateTestService, CreateTestRepository]
})
export class CreateTestModule {}
