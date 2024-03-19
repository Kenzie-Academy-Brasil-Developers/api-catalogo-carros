import { container } from 'tsyringe';
import { CarService } from '../../services/car.service';
import { mock_carUpdateBody, mock_carUpdated } from '../__mock__/car.mock';
import { prismaMock } from '../__mock__/prisma';

describe('Integrations test: update car', () => {
   it('should be able update car with sucess', async () => {
      const carService = container.resolve(CarService);

      const car = mock_carUpdated;

      prismaMock.car.update.mockResolvedValue(car);

      const data = await carService.update(mock_carUpdateBody, car.id);

      expect(data).toStrictEqual(mock_carUpdated);
   });
});
