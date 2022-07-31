import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AnswerQuestionDto } from "./dto/request/answer_question.dto";
import { AskQuestionDto } from "./dto/request/ask_question.req.dto";
import { AskQuestion } from "./models/ask_question.schema";


@Injectable()
export class InteractionRepository{
    constructor(
        @InjectModel(AskQuestion.name)
        private readonly askQuestion: Model<AskQuestion>
    ) {}

    async insertQuestion(askQuestionDto: AskQuestionDto) : Promise<any>{
        console.log(askQuestionDto)
        const res = new this.askQuestion(askQuestionDto)
        return res.save()
    }

    async getQuestionList(test_name: string) : Promise<any>{
        const res: AskQuestionDto[] = await this.askQuestion.find({
            test_name,
            resolved: false
        })
        return res
    }

    async updateQuestionWithAnswer(answerQuestionDto: AnswerQuestionDto) : Promise<any>{
        const res = await this.askQuestion.findOneAndUpdate({
            question_num: answerQuestionDto.question_num
        }, {answer: answerQuestionDto.answer})
        return res
    }
}