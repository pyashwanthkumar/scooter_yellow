import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config"

@Injectable()
export class AppConfigService {

    private readonly _db_uristring! : string

    get db_uri_string() : string {
        return this._db_uristring
    }

    constructor(private readonly _configService : ConfigService){
        this._db_uristring = this.get_db_uri_from_env()
    }
    
    private get_db_uri_from_env() : string {
        const db_uri_string = this._configService.get<string>('DATABASE_DEV')
        if (!db_uri_string){
            throw new Error('no database uri')
            
        }
        return db_uri_string
    }

}