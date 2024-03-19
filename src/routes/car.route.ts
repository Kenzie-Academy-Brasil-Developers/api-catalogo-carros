import { Router } from 'express';
import { container } from 'tsyringe';
import { CarController } from '../controllers/car.controller';
import { NotFound } from '../middlewares/notfound.middleware';
import { ValidateBody } from '../middlewares/validateBody.middleware';
import { carSchemaCreate } from '../schemas/car.schema';
import { CarService } from '../services/car.service';

export const carRouter = Router();

container.registerSingleton('CarService', CarService);

const carController = container.resolve(CarController);

carRouter.post('/', ValidateBody.execute(carSchemaCreate), (req, res) => {
   carController.create(req, res);
});
carRouter.get('/', (req, res) => {
   carController.findMany(req, res);
});
carRouter.get('/:id', NotFound.execute, (req, res) => {
   carController.findOne(req, res);
});
carRouter.patch('/:id', NotFound.execute, ValidateBody.execute(carSchemaCreate), (req, res) => {
   carController.update(req, res);
});
carRouter.delete('/:id', NotFound.execute, (req, res) => {
   carController.delete(req, res);
});
