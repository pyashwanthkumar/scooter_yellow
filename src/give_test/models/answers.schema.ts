import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Answers extends Document {
    
    @Prop()
    question : string

    @Prop()
    selected : number
}

export const AnswersSchema = SchemaFactory.createForClass(Answers)