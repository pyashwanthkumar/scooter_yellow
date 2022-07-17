import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AnswersSchema } from "./answers.schema";
import { Document } from "mongoose"
import { StudentAnswer } from "../dto/request/answers.dto";
import { Results, ResultsSchema } from "./results.schema";

@Schema()
export class TestReport extends Document {

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

    @Prop([ResultsSchema])
    results : [Results]
}

export const TestReportSchema = SchemaFactory.createForClass(TestReport)