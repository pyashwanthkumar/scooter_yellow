import { qlistI } from "./qlist.interface"

export interface GiveExam {
    name : string
    year : string
    semester : string
    time : string
    grade : number
    qlist : qlistI[]
}