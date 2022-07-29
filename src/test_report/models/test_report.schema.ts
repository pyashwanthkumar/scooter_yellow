import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { QuesAnsFeedSchema, QuesAnsFeed } from "src/create_test/models/QuesAnsFeed.schema";
import { Results, ResultsSchema } from "./results.schema";

@Schema()
export class TestReport extends Document{
    
    @Prop()
    test_name : string

    @Prop()
    student_name : string

    @Prop()
    student_id: number

    @Prop()
    semester: string

    @Prop()
    points : number
    
    @Prop()
    year : number
    
    @Prop()
    subject : string

    @Prop([ResultsSchema])
    ques_ans_feed : [Results]
} 

export const TestReportSchema = SchemaFactory.createForClass(TestReport)