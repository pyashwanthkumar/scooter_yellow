import { qaflistI } from "./qaflist.interface"

export interface CreateExam {
    name : string
    year : string
    semester : string
    time : string
    grade : number
    qlist : qaflistI[]
}