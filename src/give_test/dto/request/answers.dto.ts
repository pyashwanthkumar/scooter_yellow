import { IsArray, IsNumber, IsString } from "class-validator";

export class StudentAnswer {
    
    @IsString()
    question : string

    @IsNumber()
    selected : number
}