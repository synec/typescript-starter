import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AppController } from './app.controller'

@Module({
    controllers: [ AppController ],
    modules: [ UserModule ],
})
export class ApplicationModule {}
