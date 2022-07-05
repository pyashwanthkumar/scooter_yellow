import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { QuesAnsFeed, QuesAnsFeedSchema } from "./QuesAnsFeed.schema";

@Schema()
export class CreateTest extends Document {
    @Prop()
    name : string

    @Prop()
    year : number

    @Prop()
    semester : string

    @Prop()
    time : string

    @Prop()
    points : number

    @Prop()
    num_of_questions : number

    @Prop([QuesAnsFeedSchema])
    ques_ans_feed : [QuesAnsFeed]
}

export const CreateTestSchema = SchemaFactory.createForClass(CreateTest)