import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddQuestionReqDTO } from "./dto/request/add-question-req.dto";
import { CreateTest, CreateTestSchema } from "./models/create_test.schema";


@Injectable()
export class CreateTestRepository{
    constructor(
        @InjectModel(CreateTest.name)
        private readonly createTest : Model<CreateTest>
    ) {}

    async insertOne(data : Partial<CreateTest>) : Promise<any> {
        const test = new this.createTest(data)
        return test.save() 
    }

    async findTest(id : string) : Promise<CreateTest> {
        const test = await this.createTest.findOne({_id : id})
        return test
    }

    async addQuestion(id : string, addQuestionReqDTO : AddQuestionReqDTO) : Promise<any> {
    
        // console.log(addQuestionReqDTO)
        this.createTest.findOneAndUpdate(
            {_id : id},
            {$push : {ques_ans_feed : addQuestionReqDTO}},
            function (error, success) {
                if (error) {
                    return BadRequestException
                } else {
                    return HttpStatus.OK
                }
            }
        )
    }
}