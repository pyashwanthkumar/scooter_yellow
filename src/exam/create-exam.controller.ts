import { Body, Controller, Post } from "@nestjs/common";
import { CreateExamDto } from "./dto/create-exam.dto";
import { CreateExamService } from "./create-exam.service";

@Controller('create-exam')
export class CreateExamController{
    constructor(private createExamService: CreateExamService){}

    @Post()
    async create(@Body() createExamDto : CreateExamDto){
        this.createExamService.create(createExamDto)
    }
    
}