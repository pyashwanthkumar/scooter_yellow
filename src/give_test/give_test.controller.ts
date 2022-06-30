import { Body, Controller, Post } from '@nestjs/common';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestService } from './give_test.service';

@Controller('give-test')
export class GiveTestController {

    constructor(private readonly giveTestService : GiveTestService) {}

    @Post()
    async submitTest(
        @Body() submitTestReqDTO : SubmitTestReqDTO) : Promise<any> {
        return this.giveTestService.submitTest(submitTestReqDTO)
    }

}
