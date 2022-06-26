import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { CreateExamController } from "./create-exam.controller"
import { CreateExamService } from "./create-exam.service"

@Module({
    controllers : [CreateExamController],
    exports : [CreateExamService],
    providers :[CreateExamService]
})

export class CreateExamModule {}