import { Injectable } from '@nestjs/common';
import { AnswerQuestionDto } from './dto/request/answer_question.dto';
import { AskQuestionDto } from './dto/request/ask_question.req.dto';
import { InteractionRepository } from './interaction.repostitory';

@Injectable()
export class InteractionService {
    constructor(private readonly interactionRepository: InteractionRepository) {}

    async askQuestion(askQuestionDto: AskQuestionDto): Promise<any> {
        this.interactionRepository.insertQuestion(askQuestionDto)
    }

    async getQuestionsList(test_name: string): Promise<any> {
        return this.interactionRepository.getQuestionList(test_name)
    }

    async answerQuestion(answerQuestionDto: AnswerQuestionDto): Promise<any> {
        return this.interactionRepository.updateQuestionWithAnswer(answerQuestionDto)
    }
}
