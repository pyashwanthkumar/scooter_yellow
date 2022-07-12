import { Injectable } from '@nestjs/common';
import { UserResponse } from 'src/users/dto/response/user-response.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
    async login(user : UserResponse, response : Response) : Promise<void>{

    }
}
