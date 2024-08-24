import { DataSourceOptions } from 'typeorm';
import { ENV } from './env.config';


export function AppDataSource(): DataSourceOptions{
  return {
    type: 'postgres',
    host: ENV.PG_HOST,
    port: Number(ENV.PG_PORT),
    username: ENV.PG_USER,
    password: ENV.PG_PASSWORD,
    database: ENV.PG_DATABASE,
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migration/**/*.ts'],
    subscribers: [__dirname + '/../subscriber/**/*.ts'],
  };
}
