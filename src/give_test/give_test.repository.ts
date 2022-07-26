import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTest } from "src/create_test/models/create_test.schema";
import { TestReport } from "./models/test_report.schema";
import { GiveTest } from "./models/give_test.schema";


@Injectable()
export class GiveTestRepository {
    constructor(
        @InjectModel(CreateTest.name)
        private readonly createTest: Model<CreateTest>,
        @InjectModel(GiveTest.name)
        private readonly giveTest: Model<GiveTest>,
        @InjectModel(TestReport.name)
        private readonly testReport: Model<TestReport>
    ) {}

    async insertTest(data: Partial<GiveTest>): Promise<any> {
        const test = new this.giveTest(data)
        return test.save()
    }

    async findTest(year: number, semester: string, name: string): Promise<CreateTest> {
        const test = await this.createTest.findOne({
            name,
            year, 
            semester 
        })
        console.log(test)
        return test
    }

    async addTestReport(result: Partial<TestReport>): Promise<any> {
        const report = new this.testReport(result)
        report.save()
    }
}