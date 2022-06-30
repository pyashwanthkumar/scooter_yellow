import { Injectable } from '@nestjs/common';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';

@Injectable()
export class GiveTestService {
    
    async submitTest(submitTestReqDTO : SubmitTestReqDTO) : Promise<any> {
        return submitTestReqDTO
    }
}
