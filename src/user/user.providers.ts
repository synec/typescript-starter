import { Connection, Repository } from 'typeorm'
import { User } from './user.model'
import { USER_REPOSITORY_TOKEN, DB_CONNECTION_TOKEN } from '../constants'

export const userProviders = [
  {
    provide: USER_REPOSITORY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [ DB_CONNECTION_TOKEN ],
  },
]
