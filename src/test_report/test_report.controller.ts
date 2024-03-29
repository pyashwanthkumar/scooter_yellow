import { Controller, Get, Param } from '@nestjs/common';
import { TestReportService } from './test_report.service';

@Controller('test-report')
export class TestReportController {
    constructor(private readonly testReportService: TestReportService) {}

    @Get(":student_id/:test_name")
    async provideReport(@Param("student_id") student_id: number, @Param("test_name") test_name: string): Promise<any> {
        return this.testReportService.provideReport(student_id, test_name)
    }
}
