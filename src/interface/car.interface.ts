import { z } from 'zod';
import { carSchema, carSchemaCreate } from '../schemas/car.schema';

export type TCarReturn = z.infer<typeof carSchema>;
export type TCarCreate = z.infer<typeof carSchemaCreate>;
export type TCarCreateReturn = z.infer<typeof carSchemaCreate>;
