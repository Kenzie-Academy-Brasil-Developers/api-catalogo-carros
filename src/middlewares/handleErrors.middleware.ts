import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/appErrrors.error';

export class HandleErrors {
   execute = (err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
         return res.status(err.statusCode).json({ message: err.message });
      }
      if (err instanceof ZodError) {
         return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal Server Error' });
   };
}
