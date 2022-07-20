import { Injectable } from '@nestjs/common';
import { GradeTestDTO } from './dto/request/grade-test-req.dto';

@Injectable()
export class GradeTestService {

    async gradeTest(test_name : string, gradeTestDTO : GradeTestDTO) : Promise<any> {
        
    }
}
