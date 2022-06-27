import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { create } from 'domain';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './models/Users';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository : UsersRepository) {}

    async createUser(createUserRequest : CreateUserRequest) : Promise<UserResponse> {
        await this.validateCreateUserRequest(createUserRequest)
        const user =  await this.usersRepository.insertOne({
            ...createUserRequest,
            password: await hash(createUserRequest.password, 10),
        })
        return this.buildResponse(user)
    }

    private async validateCreateUserRequest(createUserRequest : CreateUserRequest) : Promise<void>{
        const user = await this.usersRepository.findOneByEmail(createUserRequest.email)

        if (user) {
            throw new BadRequestException('This email already exists')
        }
    }

    private buildResponse(user : User) : UserResponse {
        return {
            _id  : user._id.toHexString(),
            email: user.email
        }
    }
}
