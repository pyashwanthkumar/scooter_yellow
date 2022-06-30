import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestRepository } from './create_test.repository';
import { AddQuestionReqDTO } from './dto/request/add-question-req.dto';
import { TestSettingRequest } from './dto/request/create-test-setting-req.dto';
import { AddQuestionResDTO } from './dto/response/add-question-res.dto';
import { TestSettingResponse } from './dto/response/create-test-setting-res.dto';
import { CreateTest } from './models/create_test.schema';

@Injectable()
export class CreateTestService {

    constructor(private readonly createTestRepository : CreateTestRepository) {}

    async addTestSetting(testSettingRequest : TestSettingRequest) : Promise<any> {
        const test = await this.createTestRepository.insertOne(testSettingRequest)
        return this.settingResponse(test)
    }

    async updateTest(id : string, addQuestionReqDTO : AddQuestionReqDTO) : Promise<any> {
        // try{
        //     const test = await this.createTestRepository.findTest(id)
        //     if(!test){
        //         return NotFoundException
        //     }



        // }catch{
        //     return BadRequestException
        // }
    }

    private settingResponse(createTest : CreateTest) : TestSettingResponse {
        return {
            _id : createTest._id.toHexString()
        }
    }
}
