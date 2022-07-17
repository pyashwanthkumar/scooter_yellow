import { IsArray, IsNumber, IsString } from "class-validator";
import { StudentAnswer } from "./answers.dto";

export class GiveTestReqDTO {
    
    @IsString()
    test_name : string
    
    @IsString()
    semester : string

    @IsNumber()
    year : number

}