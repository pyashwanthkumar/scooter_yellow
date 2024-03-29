import { AppConfigService } from "./app-configuration.service";
import { ConfigModule } from "@nestjs/config"
import { Module } from "@nestjs/common";

@Module({
    exports: [AppConfigService],
    imports: [ConfigModule.forRoot({isGlobal:true})],
    providers: [AppConfigService]
})

export class AppConfigModule {}