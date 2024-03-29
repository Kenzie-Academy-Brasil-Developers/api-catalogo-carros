import 'reflect-metadata';
import express, { json } from 'express';
import helmet from 'helmet';
import { carRouter } from './routes/car.route';

export const app = express();
app.use(helmet());
app.use(json());
app.use('/cars', carRouter);
