import { IsNumber, IsString } from "class-validator";

export class AddQuestionResDTO {
    @IsString()
    message : string
}