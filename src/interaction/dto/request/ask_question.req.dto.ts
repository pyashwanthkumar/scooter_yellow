import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AskQuestionDto{
    
    @IsString()
    @IsNotEmpty()
    question: string
    
    @IsNumber()
    @IsNotEmpty()
    student_id: number

    @IsString()
    @IsNotEmpty()
    test_question: string

    @IsString()
    @IsNotEmpty()
    feedback: string
}