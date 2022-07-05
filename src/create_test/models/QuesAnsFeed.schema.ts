import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

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

export const QuesAnsFeedSchema = SchemaFactory.createForClass(QuesAnsFeed)