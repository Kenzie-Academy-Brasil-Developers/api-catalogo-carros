import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class NotFound {
   static execute = async (request: Request, response: Response, next: NextFunction) => {
      if (request.params.id) {
         const car = request.params.id;
         const search = await prisma.car.findFirst({ where: { id: car } });

         if (!search) {
            return response.status(404).json({ message: 'Car not found' });
         }
      }

      return next();
   };
}
