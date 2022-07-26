import { Injectable } from '@nestjs/common';
import { UserResponse } from 'src/users/dto/response/user-response.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from "@nestjs/jwt"

export interface TokenPayload{
    userId : string
}

@Injectable()
export class AuthService {

    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService) {}
    
    async login(user : UserResponse, response : Response) : Promise<void>{
        const tokenPayload : TokenPayload = {
            userId: user._id
        }
        const expires = new Date()
        expires.setSeconds(
            expires.getSeconds() + this.configService.get('JWT_EXPIRATION_TIME')
        )
        const token = this.jwtService.sign(tokenPayload)

        response.cookie('Authentication', token, {
            httpOnly: true,
            expires
        })
    }
    
}
