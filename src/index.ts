import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import { ENV } from './config/env.config';
import { setupSwagger } from './config/swagger.config';
import dataSource from './config/dataSource'; 

const app = express();
const PORT = ENV.PORT || 3000;

dataSource.initialize()
  .then(() => {
    console.info('Data Source has been initialized!');
    
    app.use('/api', routes);

    setupSwagger(app);
    
    app.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error during Data Source initialization:', error));