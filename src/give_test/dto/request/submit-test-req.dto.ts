import { IsArray, IsNumber, IsString } from "class-validator";
import { StudentAnswer } from "./answers.dto";

export class SubmitTestReqDTO {
    
    @IsString()
    test_name : string
    
    @IsString()
    student_name : string
    
    @IsNumber()
    student_id : number

    @IsString()
    semester : string

    @IsNumber()
    year : number

    @IsString()
    subject : string

    @IsArray()
    answers : [StudentAnswer]

}