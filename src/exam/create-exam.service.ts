import { Injectable } from "@nestjs/common"
import { CreateExam } from "./interfaces/exam.interface"

@Injectable()
export class CreateExamService {
    private readonly exam : CreateExam[] = []

    create(exam : CreateExam){
        this.exam.push(exam)
    }

    findAll() : CreateExam[] {
        return this.exam
    }
}