import { Injectable } from '@nestjs/common';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestRepository } from './give_test.repository';

@Injectable()
export class GiveTestService {
    
    constructor(private readonly giveTestRepository : GiveTestRepository){}

    async submitTest(submitTestReqDTO : SubmitTestReqDTO) : Promise<any> {
        this.giveTestRepository.insertTest(submitTestReqDTO)
    }
}
