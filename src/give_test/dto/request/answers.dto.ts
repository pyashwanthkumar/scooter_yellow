import { IsString } from "class-validator";

export class Answer {
    
    @IsString()
    question : string

    @IsString()
    answer : string
}