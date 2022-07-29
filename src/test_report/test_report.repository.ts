import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TestReport } from "./models/test_report.schema";

@Injectable()
export class TestReportRepository {
    constructor(
        @InjectModel(TestReport.name)
        private readonly testReport: Model<TestReport>
    ) {}

    async findReport(student_id: number, test_name: string): Promise<any> {
        const report = await this.testReport.findOne({
            student_id, 
            test_name
        })
        return report
    }

}