import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AnswersSchema } from "./answers.schema";
import { Document } from "mongoose"
import { Answer } from "../dto/request/answers.dto";

@Schema()
export class GiveTest extends Document {

    @Prop()
    test_name : string

    @Prop()
    student_name : string

    @Prop()
    student_id : number

    @Prop()
    semester : string

    @Prop()
    year : number

    @Prop()
    subject : string

    @Prop([AnswersSchema])
    answers : [Answer]
}

export const GiveTestSchema = SchemaFactory.createForClass(GiveTest)