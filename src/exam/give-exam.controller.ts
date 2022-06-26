import { Body ,Controller, Post } from "@nestjs/common"
import { GiveExamDto } from "./dto/give-exam.dto"
import { GiveExamService } from "./give-exam.service"

@Controller('give-exam')
export class GiveExamController{
    constructor(private giveExamService: GiveExamService){}

    @Post()
    async create(@Body() giveExamDto : GiveExamDto){
        this.giveExamService.create(giveExamDto)
    }
}