import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
    points : number
}