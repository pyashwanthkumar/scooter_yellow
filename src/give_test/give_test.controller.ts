import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GiveTestReqDTO } from './dto/request/give-test-req.dto';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestService } from './give_test.service';

@Controller('give-test')
export class GiveTestController {

    constructor(private readonly giveTestService: GiveTestService) {}

   @Get(':year/:semester/:test_name')
   async getTest(
        @Param('year') year: number,
        @Param('semester') semester: string,
        @Param('test_name') test_name: string
   ): Promise<any> {
        return this.giveTestService.getTest(year, semester, test_name)
   }

    @Post('/submit')
    async submitTest(
        @Body() submitTestReqDTO: SubmitTestReqDTO): Promise<any> {
        return this.giveTestService.submitTest(submitTestReqDTO)
    }
}
