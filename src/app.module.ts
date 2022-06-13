import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';


//Mongo details
import { MongooseModule } from '@nestjs/mongoose';

const db = this.conf  

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/') , ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
