import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AnswerQuestionDto{
    @IsNumber()
    @IsNotEmpty()
    question_num: string

    @IsString()
    @IsNotEmpty()
    answer: string

}