import { Request, Response } from 'express';
import { CarService } from '../services/car.service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CarController {
   constructor (@inject('CarService') private carService: CarService) {}

   create = async (req: Request, res: Response): Promise<Response> => {
      const body = req.body;
      const car = await this.carService.create(body);
      return res.status(201).json(car);
   };

   findOne = async (req: Request, res: Response): Promise<Response> => {
      const params = req.params.id;
      const car = await this.carService.findOne(params);
      return res.status(200).json(car);
   };

   findMany = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.findMany();
      return res.status(200).json(car);
   };

   update = async (req: Request, res: Response): Promise<Response> => {
      const body = req.body;
      const params = req.params.id;
      const car = await this.carService.update(body, params);
      return res.status(200).json(car);
   };

   delete = async (req: Request, res: Response): Promise<Response> => {
      const params = req.params.id;
      const car = await this.carService.delete(params);
      return res.status(204).json(car);
   };
}
