import { IsNotEmpty, IsString } from "class-validator";

export class AddQuestionReqDTO{

    @IsString()
    @IsNotEmpty()
    question : string
    
    @IsString()
    @IsNotEmpty()
    answer : string
    
    @IsString()
    @IsNotEmpty()
    feedback : string
}