import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"
import { qaflistI } from "../interfaces/qaflist.interface";

@Schema()
export class QandAwithFeed {
    
    @Prop()
    questions : string

    @Prop()
    answer : string

    @Prop()
    feedback : string

    @Prop()
    points : number
}

export const QandAwithFeedSchema = SchemaFactory.createForClass(QandAwithFeed)

@Schema()
export class CreateExam {

    @Prop()
    name : string
    
    @Prop()
    year : string
    
    @Prop()
    semester : string
    
    @Prop()
    time : string

    @Prop()
    grade : number

    @Prop({type : QandAwithFeedSchema})
    qaflist : qaflistI 
}

export const CreateExamSchema = SchemaFactory.createForClass(CreateExam)