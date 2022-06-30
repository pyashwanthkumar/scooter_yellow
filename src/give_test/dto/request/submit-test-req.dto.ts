import { IsArray, IsString } from "class-validator";
import { Answer } from "./answers.dto";

export class SubmitTestReqDTO {
    
    @IsString()
    test_name : string
    
    @IsString()
    student_name : string
    
    @IsString()
    student_id : string

    @IsString()
    semester : string

    @IsString()
    year : string

    @IsString()
    subject : string

    @IsArray()
    answers : Answer[]

}