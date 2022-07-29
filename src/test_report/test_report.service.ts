import { Injectable } from '@nestjs/common';
import { TestReportRepository } from './test_report.repository';

@Injectable()
export class TestReportService {

    constructor(private readonly testReportRepository: TestReportRepository) {}

    async provideReport(student_id : number, test_name : string) : Promise<any> {
        return this.testReportRepository.findReport(student_id, test_name)
    }
}
