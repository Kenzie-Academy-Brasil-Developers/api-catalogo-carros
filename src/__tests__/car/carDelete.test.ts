import { container } from 'tsyringe';
import { CarService } from '../../services/car.service';
import { mock_carCreate } from '../__mock__/car.mock';
import { prismaMock } from '../__mock__/prisma';

describe('Unit test: delete car', () => {
   it('should be able to delete a car successfully', async () => {
      const carService = container.resolve(CarService);

      prismaMock.car.delete.mockResolvedValue(mock_carCreate);

      const data = await carService.delete(mock_carCreate.id);

      expect(data).toBeUndefined();
   });
});
