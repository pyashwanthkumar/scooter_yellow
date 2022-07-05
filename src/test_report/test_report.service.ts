import { Injectable } from '@nestjs/common';

@Injectable()
export class TestReportService {

    async provideReport(student_id : number, test_name : string) : Promise<any> {
        return ({
            name : "midterm",
            student_id,
            subject : "OS",
            answers : [{
                question : "what is a page?",
                answer : "smallest unit of mmu",
                feedback : "correct",
                points : "2"
            },
            {
                question : "what is a kernel?",
                answer : "It's nothing but operating system",
                feedback : "Kernel is not an operating system, kernel is a core program in an operating system that complete control of the system",
                points : "0"
            }]
        })
    }
}
