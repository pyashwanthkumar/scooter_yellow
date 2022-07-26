import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateTestService } from './create_test.service';
import { AddQuestionReqDTO } from './dto/request/add-question-req.dto';
import { TestSettingRequest } from './dto/request/create-test-setting-req.dto';

@Controller('create-test')
export class CreateTestController {

    constructor(private readonly createTestService : CreateTestService) {}

    @Post()
    async setTestParam(
        @Body() testSettingRequest : TestSettingRequest
    ) : Promise<any> {
        return this.createTestService.addTestSetting(testSettingRequest)
    }

    @Put(':id')
    async addNextQuestion(
        @Param('id') id : string, @Body() addQuestionReqDTO : AddQuestionReqDTO        
    ) : Promise<any> {
        console.log(addQuestionReqDTO)
        return this.createTestService.updateTest(id, addQuestionReqDTO)
    }

}
