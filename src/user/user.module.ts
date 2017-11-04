import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import { userProviders } from './user.providers'
import { UserService } from './user.service'

@Module({
  modules: [DatabaseModule],
  components: [
    ...userProviders,
    UserService,
  ],
})
export class UserModule {}
