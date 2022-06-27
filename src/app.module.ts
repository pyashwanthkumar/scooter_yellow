import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';


//Mongo details
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AppConfigModule } from './config/app-configuration.module';
import { AppConfigService } from './config/app-configuration.service';
import { CreateExamModule } from './exam/create-exam.module';
import { UsersModule } from './users/users.module';
import { CreateTestModule } from './create_test/create_test.module';

  

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017')],
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports :[AppConfigModule],
      inject : [AppConfigService],
      useFactory : (appConfigService : AppConfigService) => {
        const options : MongooseModuleOptions = {
          uri : appConfigService.db_uri_string,
          useNewUrlParser : true,
          useUnifiedTopology : true,
        }
        console.log(`options ${options}`)
        return options
      },
    }),
    CreateExamModule,
    UsersModule,
    CreateTestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
