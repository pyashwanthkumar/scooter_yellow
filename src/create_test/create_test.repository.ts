import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
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

    // async addQuestion(id) : Promise<any> {

    // }
}