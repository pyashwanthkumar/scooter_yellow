import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/users/current-user.decorator';
import { UserResponse } from 'src/users/dto/response/user-response.dto';
import { Response } from 'express';
import { User } from 'src/users/models/Users';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @CurrentUser() user : UserResponse,
        @Res({passthrough : true}) response : Response
    ) : Promise<void> {
        await this.authService.login(user, response)
        response.send(user)
    }
}
