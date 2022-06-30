import { IsNumber } from "class-validator";

export class TestSettingResponse {
    @IsNumber()
    _id : string
}