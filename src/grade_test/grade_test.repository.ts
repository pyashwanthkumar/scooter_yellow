import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTest } from "src/create_test/models/create_test.schema";
import { GiveTest } from "src/give_test/models/give_test.schema";


@Injectable()
export class GradeTestRepository {
    constructor(
        @InjectModel(CreateTest.name)
        private readonly createTest : Model<CreateTest>,
        @InjectModel(GiveTest.name)
        private readonly giveTest : Model<GiveTest>
    ) {}

    async findTest(name : string, year : number, semester : string) : Promise<CreateTest> {
        const test = await this.createTest.findOne({
            name,
            year, 
            semester 
        })
        return test
    }

    async findStudentSubmission(test_name : string, student_id : number, year : number) : Promise<any> {
        const test = await this.giveTest.findOne({
            test_name,
            student_id,
            year,
        })
    }
}