import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OptionsFeedbackDTO {
    @IsString()
    @IsNotEmpty()
    option : string
   
    // @IsBoolean()
    // @IsNotEmpty()
    // answer : boolean
    
    @IsString()
    @IsNotEmpty()
    feedback : string
}

export class AddQuestionReqDTO{

    @IsString()
    @IsNotEmpty()
    question : string
    
    @IsArray()
    @IsNotEmpty()
    options_with_feedback : [OptionsFeedbackDTO]

    @IsNumber()
    @IsNotEmpty()
    answer : number

    @IsNumber()
    @IsNotEmpty()
    points : number
}