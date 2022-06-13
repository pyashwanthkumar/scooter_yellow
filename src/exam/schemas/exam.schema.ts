import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"
import { qlistI } from "src/common/interfaces/qlist.interface";

@Schema()
export class QandAwithFeed {
    
    @Prop()
    questions : string

    @Prop()
    answer : string

    @Prop()
    feedback : string
}

export const QandAwithFeedSchema = SchemaFactory.createForClass(QandAwithFeed)

@Schema()
export class Exam {

    @Prop()
    name : string
    
    @Prop()
    year : string
    
    @Prop()
    semester : string
    
    @Prop()
    time : string

    @Prop({type : QandAwithFeedSchema})
    qlist : qlistI 
}

export const ExamSchem = SchemaFactory.createForClass(Exam)