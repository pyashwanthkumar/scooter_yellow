import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GradeTestDTO } from './dto/request/grade-test-req.dto';
import { GradeTestService } from './grade_test.service';

@Controller('grade-test')
export class GradeTestController {
    
    constructor(private readonly gradeTestService : GradeTestService) {}

    @Post(":test_name")
    async doGrading(
        @Param('test_name') test_name : string, @Body() gradeTestDTO : GradeTestDTO
    ) : Promise<any> {
        this.gradeTestService.gradeTest(test_name, gradeTestDTO)
    }

}
