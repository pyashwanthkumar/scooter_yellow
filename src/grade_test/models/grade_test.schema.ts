import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class GradeTest extends Document {

    @Prop()
    graded_by : string

    @Prop()
    test_name : string

    @Prop()
    student_name : string

    @Prop()
    student_id : number

    @Prop()
    semester : string

    @Prop()
    year : number

    @Prop()
    subject : string

    // @Prop([AnswersSchema])
    // answers : [Answer]

}