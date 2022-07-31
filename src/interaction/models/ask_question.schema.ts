import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class AskQuestion extends Document{
    @Prop()
    question: string
    
    @Prop()
    question_num: number

    @Prop()
    student_id: number
    
    @Prop()
    test_name: string

    @Prop()
    test_question: string

    @Prop()
    feedback: string

    @Prop({default: false})
    answered: boolean

    @Prop({default: false})
    resolved: boolean

    @Prop()
    answer: string
}

export const AskQuestionSchema = SchemaFactory.createForClass(AskQuestion)