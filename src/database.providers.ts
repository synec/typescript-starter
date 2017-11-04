import { createConnection } from 'typeorm'
import { DB_CONNECTION_TOKEN } from './constants'

export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localuser',
      port: 3306,
      username: 'username',
      password: 'password',
      database: 'database',
      entities: [
          __dirname + '/**/*.model{.ts,.js}',
      ],
      synchronize: true,
      logging: true,
    }),
  },
]
