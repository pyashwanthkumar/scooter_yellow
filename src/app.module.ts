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
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


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
    UsersModule,
    CreateTestModule,
    GiveTestModule,
    TestReportModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
