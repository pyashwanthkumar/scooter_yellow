import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswerQuestionDto } from './dto/request/answer_question.dto';
import { AskQuestionDto } from './dto/request/ask_question.req.dto';
import { InteractionService } from './interaction.service';

@Controller('interaction')
export class InteractionController {
    constructor(private readonly interactionService: InteractionService) {}

    @Post("/ask-question")
    async askQuestion(@Body() askQuestionDto: AskQuestionDto): Promise<any> {
        this.interactionService.askQuestion(askQuestionDto)
    }

    @Get("/student-questions/:test_name")
    async getQuestionsByTest(@Param('test_name') test_name: string): Promise<any> {
        return this.interactionService.getQuestionsList(test_name)
    }

    @Post("/answer-question")
    async answerQuestion(@Body() answerQuestionDto: AnswerQuestionDto): Promise<any> {
        return this.interactionService.answerQuestion(answerQuestionDto)
    }
}
