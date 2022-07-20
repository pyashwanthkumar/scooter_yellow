import { Injectable } from '@nestjs/common';
import { TestSettingRequest } from 'src/create_test/dto/request/create-test-setting-req.dto';
import { CreateTest } from 'src/create_test/models/create_test.schema';
import { GiveTestReqDTO } from './dto/request/give-test-req.dto';
import { SubmitTestReqDTO } from './dto/request/submit-test-req.dto';
import { GiveTestRepository } from './give_test.repository';

@Injectable()
export class GiveTestService {
    
    constructor(private readonly giveTestRepository : GiveTestRepository){}

    async submitTest(submitTestReqDTO : SubmitTestReqDTO) : Promise<any> {
        const test = await this.giveTestRepository.findTest(submitTestReqDTO.test_name, submitTestReqDTO.year, submitTestReqDTO.semester)
        this.gradeTest(test, submitTestReqDTO)
        this.giveTestRepository.insertTest(submitTestReqDTO)
    }

    async getTest(giveTestReqDTO : GiveTestReqDTO){
        return this.giveTestRepository.findTest(giveTestReqDTO.test_name, giveTestReqDTO.year, giveTestReqDTO.semester)
    }

    gradeTest(test : CreateTest, submitTestReqDTO : SubmitTestReqDTO){
        const studentAnswer = submitTestReqDTO.answers
        const testAnswer = test.ques_ans_feed
        console.log(testAnswer)
        let results = []
        let res = (({test_name, student_name, student_id, semester, year, subject}) => ({test_name, student_name, student_id, semester, year, subject}))(submitTestReqDTO) 
        for(var i = 0; i < studentAnswer.length; i++){
            console.log("i: " + i)
            const options = testAnswer[i].options_with_feedback
            const selected = studentAnswer[i].selected
            if(studentAnswer[i].selected != testAnswer[i].answer){
                // console.log(options[selected])
                const result = {
                    points : 0,
                    correct_answer : options[testAnswer[i].answer].option,
                    selected_answer : options[selected].option,
                    feedback : options[selected].feedback
                }
                results = [...results, result]
            }else{
                const result = {
                    points : testAnswer[i].points,
                    selected_answer : options[selected].option,
                }
                results = [...results, result]
            }
        }
        res = {...res, ...{results : results}}
        console.log(res)
        this.giveTestRepository.addTestReport(res)
    }
}
