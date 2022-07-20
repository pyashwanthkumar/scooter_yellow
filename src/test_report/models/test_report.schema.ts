import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { QuesAnsFeedSchema, QuesAnsFeed } from "src/create_test/models/QuesAnsFeed.schema";

@Schema()
export class TestReport extends Document{
    
    @Prop()
    test_name : string

    @Prop()
    student_name : string

    @Prop()
    points : string

    @Prop([QuesAnsFeedSchema])
    ques_ans_feed : [QuesAnsFeed]
} 