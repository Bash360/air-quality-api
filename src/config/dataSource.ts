import { DataSource } from 'typeorm';
import { AppDataSource } from './orm';

const dataSource = new DataSource(AppDataSource());

export default dataSource;
