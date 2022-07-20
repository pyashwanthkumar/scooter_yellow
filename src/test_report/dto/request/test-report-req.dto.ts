import { IsString } from "class-validator";

export class TestReportReqDTO{
    
    @IsString()
    student_id : string

    @IsString()
    test_name : string
}