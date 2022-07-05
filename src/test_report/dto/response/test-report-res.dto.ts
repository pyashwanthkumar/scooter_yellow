import { IsArray, IsNumber, IsString } from "class-validator";
import { Feedback } from "./feedback.dto";

export class TestReportResDTO {

    @IsString()
    test_name : string

    @IsNumber()
    grade : number

    @IsNumber()
    year : number

    @IsString()
    semester : string

    @IsString()
    subject : string

    @IsArray()
    feedback : Feedback[]

}