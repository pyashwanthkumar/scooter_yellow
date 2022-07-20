import { Body, Controller, Get, Post } from '@nestjs/common';
import { GiveTestReqDTO } from './dto/request/give-test-req.dto';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestService } from './give_test.service';

@Controller('give-test')
export class GiveTestController {

    constructor(private readonly giveTestService : GiveTestService) {}

   @Get()
   async getTest(
        @Body() giveTestReqDTO : GiveTestReqDTO
   ) : Promise<any> {
        return this.giveTestService.getTest(giveTestReqDTO)
   }

    @Post('submit')
    async submitTest(
        @Body() submitTestReqDTO : SubmitTestReqDTO) : Promise<any> {
        return this.giveTestService.submitTest(submitTestReqDTO)
    }

}
