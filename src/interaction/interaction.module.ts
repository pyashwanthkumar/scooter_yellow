import { Module } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { InteractionController } from './interaction.controller';
import { InteractionRepository } from './interaction.repostitory';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { AskQuestion, AskQuestionSchema } from './models/ask_question.schema';
import * as AutoIncrementFactory from 'mongoose-sequence'
import { Connection } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: AskQuestion.name,
    useFactory: async (connection:Connection) => {
      const schema = AskQuestionSchema
      const AutoIncrement = AutoIncrementFactory(connection)
      schema.plugin(AutoIncrement, {inc_field: 'question_num'})
      return schema
    },
    inject:[getConnectionToken()]
  }])],
  providers: [InteractionService, InteractionRepository],
  controllers: [InteractionController]
})
export class InteractionModule {}
