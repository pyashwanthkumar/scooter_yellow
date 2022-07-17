import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class GradeTestDTO{
    
    @IsNumber()
    @IsNotEmpty()
    student_id : number

    @IsNumber()
    @IsNotEmpty()
    year : number
}