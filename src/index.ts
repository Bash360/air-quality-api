import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { AppDataSource } from './config/orm';
import routes from './routes';
import { ENV } from './config/env.config';

const app = express();
const PORT = ENV.PORT || 3000;

const dataSource = new DataSource(AppDataSource());

dataSource.initialize()
  .then(() => {
    console.info('Data Source has been initialized!');
    
    app.use('/api', routes);

    app.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error during Data Source initialization:', error));