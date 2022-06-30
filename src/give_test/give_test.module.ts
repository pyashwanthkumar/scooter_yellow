import { Module } from '@nestjs/common';
import { GiveTestService } from './give_test.service';
import { GiveTestController } from './give_test.controller';

@Module({
  providers: [GiveTestService],
  controllers: [GiveTestController]
})
export class GiveTestModule {}
