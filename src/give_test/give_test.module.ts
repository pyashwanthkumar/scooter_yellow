import { Module } from '@nestjs/common';
import { GiveTestService } from './give_test.service';
import { GiveTestController } from './give_test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GiveTest, GiveTestSchema } from './models/give_test.schema';
import { GiveTestRepository } from './give_test.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name : GiveTest.name,
      schema : GiveTestSchema
    }])
  ],
  providers: [GiveTestService, GiveTestRepository],
  controllers: [GiveTestController]
})
export class GiveTestModule {}
