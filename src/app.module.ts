import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';


//Mongo details
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AppConfigModule } from './config/app-configuration.module';
import { AppConfigService } from './config/app-configuration.service';
import { UsersModule } from './users/users.module';
import { CreateTestModule } from './create_test/create_test.module';
import { GiveTestModule } from './give_test/give_test.module';
import { TestReportModule } from './test_report/test_report.module';

import { AuthModule } from './auth/auth.module';
import { GradeTestModule } from './grade_test/grade_test.module';
import { InteractionModule } from './interaction/interaction.module';


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
        return options
      },
    }),
    UsersModule,
    CreateTestModule,
    GiveTestModule,
    TestReportModule,
    AuthModule,
    GradeTestModule,
    InteractionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
