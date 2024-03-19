import { container } from 'tsyringe';
import { CarService } from '../../services/car.service';
import { mock_carCreate, mock_carCreateBody, mock_carCreateReturn } from '../__mock__/car.mock';
import { prismaMock } from '../__mock__/prisma';

describe('Integrations test: create car', () => {
   it('should be able create a car with sucess', async () => {
      const carService = container.resolve(CarService);

      prismaMock.car.create.mockResolvedValue(mock_carCreate);

      const data = await carService.create(mock_carCreateBody);

      expect(data).toStrictEqual(mock_carCreateReturn);
   });
});
