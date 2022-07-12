import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { User, UserSchema } from 'src/users/models/Users';
import { UsersController } from 'src/users/users.controller';
import { UsersRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';

@Module({
    imports : [ 
        MongooseModule.forFeature([{name : User.name, schema : UserSchema}])
    ],
    controllers : [UsersController],
    providers : [UsersService, UsersRepository],
    exports : [UsersService] 

})
export class AuthModule {
}
