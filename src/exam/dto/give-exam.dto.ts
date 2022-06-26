import { qlistItem } from './qlist.dto'

export class GiveExamDto{
    name : string
    year : string
    semester : string
    time : string
    grade : number
    qlist: qlistItem[]
}