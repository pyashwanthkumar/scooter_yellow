import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Results extends Document {
    
    @Prop()
    question : string

    @Prop()
    options : string[]

    @Prop()
    points : number

    @Prop()
    correct_answer : string

    @Prop()
    selected_answer : string

    @Prop()
    feedback : string
}

export const ResultsSchema = SchemaFactory.createForClass(Results)