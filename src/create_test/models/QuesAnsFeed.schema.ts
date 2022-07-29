import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import {OptionsFeedbackDTO} from "../dto/request/add-question-req.dto"

@Schema()
class OptionsWithFeedback extends Document {
    
    @Prop()
    option: string

    @Prop()
    feedback: string
}

const OptionsWithFeedbackSchema = SchemaFactory.createForClass(OptionsWithFeedback)

@Schema()
export class QuesAnsFeed extends Document {

    @Prop()
    question_num: number

    @Prop()
    question: string

    @Prop([OptionsWithFeedbackSchema])
    options_with_feedback: [OptionsWithFeedback]

    @Prop()
    answer: number

    @Prop()
    points: number
}

export const QuesAnsFeedSchema = SchemaFactory.createForClass(QuesAnsFeed)