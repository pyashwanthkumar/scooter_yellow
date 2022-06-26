import { qaflistItem } from './qaflist.dto'

export class CreateExamDto{
    name : string
    year : string
    semester : string
    time : string
    grade : number
    qlist: qaflistItem[]
}