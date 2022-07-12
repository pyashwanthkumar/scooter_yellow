import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GiveTest } from "./models/give_test.schema";


@Injectable()
export class GiveTestRepository {
    constructor(
        @InjectModel(GiveTest.name)
        private readonly giveTest : Model<GiveTest>
    ) {}

    async insertTest(data : Partial<GiveTest>) : Promise<any> {
        const test = new this.giveTest(data)
        console.log(data)
        return test.save()
    }
}