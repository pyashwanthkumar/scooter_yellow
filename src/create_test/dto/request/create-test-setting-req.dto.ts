import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AddQuestionReqDTO } from "./add-question-req.dto";

export class TestSettingRequest{
    
    @IsString()
    @IsNotEmpty()
    name : string

    @IsNumber()
    @IsNotEmpty()
    year : number

    @IsString()
    semester : string

    @IsString()
    @IsNotEmpty()
    time : string

    @IsNumber()
    @IsNotEmpty()
    num_of_questions : number

    @IsNumber()
    @IsNotEmpty()
    points : number

    ques_ans_feed : [AddQuestionReqDTO]
}