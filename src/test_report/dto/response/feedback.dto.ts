import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class Feedback{
    @IsString()
    @IsNotEmpty()
    question : string
    
    @IsString()
    @IsNotEmpty()
    answer : string
    
    @IsString()
    @IsNotEmpty()
    feedback : string
    
    @IsNumber()
    @IsNotEmpty()
    grade : number
}