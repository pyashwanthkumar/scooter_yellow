import { Injectable } from '@nestjs/common';
import { CreateTest } from 'src/create_test/models/create_test.schema';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestRepository } from './give_test.repository';
import { QuestionI, ResultI } from './interfaces/test_report.interface';

@Injectable()
export class GiveTestService {
    
    constructor(private readonly giveTestRepository: GiveTestRepository){}

    async submitTest(submitTestReqDTO: SubmitTestReqDTO): Promise<any> {
        const test = await this.giveTestRepository.findTest(submitTestReqDTO.year, submitTestReqDTO.semester, submitTestReqDTO.test_name)
        this.gradeTest(test, submitTestReqDTO)
        this.giveTestRepository.insertTest(submitTestReqDTO)
    }

    async getTest(year: number, semester: string, test_name: string ){
        return this.giveTestRepository.findTest(year, semester, test_name)
    }

    gradeTest(test: CreateTest, submitTestReqDTO: SubmitTestReqDTO){
        const studentAnswer = submitTestReqDTO.answers
        const testAnswer = test.ques_ans_feed
        let results: QuestionI[] = []
        //Preparing Test report using res
        let res: ResultI = (({test_name, student_name, student_id, semester, year, subject}) => ({test_name, student_name, student_id, semester, year, subject}))(submitTestReqDTO) 
        for(var i = 0; i < studentAnswer.length; i++){
            const choiceArr = testAnswer[i].options_with_feedback
            const selected = studentAnswer[i].selected
            const result: QuestionI = {
                question: testAnswer[i].question,
                options: choiceArr.map(({option, feedback}) => option)
            }
            if(studentAnswer[i].selected != testAnswer[i].answer){
                result.points = 0,
                result.correct_answer = choiceArr[testAnswer[i].answer].option,
                result.selected_answer = choiceArr[selected].option,
                result.feedback = choiceArr[selected].feedback
            }else{
                result.points = testAnswer[i].points,
                result.selected_answer = choiceArr[selected].option
            }
            results = [...results, result]
        }
        res = {...res, ...{ques_ans_feed: results}}
        this.giveTestRepository.addTestReport(res)
    }
}
