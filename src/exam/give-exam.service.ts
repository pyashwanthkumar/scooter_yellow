import { Injectable } from "@nestjs/common"
import { GiveExam } from "./interfaces/create-exam.interface"


@Injectable()
export class GiveExamService{
    private readonly exam : GiveExam[] = []

    create(exam : GiveExam){
        this.exam.push(exam)
    }

    findAll() : GiveExam[]{
        return this.exam
    }
}