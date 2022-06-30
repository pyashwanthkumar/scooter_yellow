import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class QuesAnsFeed extends Document {

    @Prop()
    question : string

    @Prop()
    answer : string

    @Prop()
    feedback : string

    @Prop()
    points : number
}

const QuesAnsFeedSchema = SchemaFactory.createForClass(QuesAnsFeed)

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

    @Prop({type : QuesAnsFeedSchema})
    ques_ans_feed : QuesAnsFeed[]
}

export const CreateTestSchema = SchemaFactory.createForClass(CreateTest)