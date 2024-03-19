import { request } from '../utils/request';

describe('Unit test: get many car', () => {
   test('should be able to get many car with success', async () => {
      const data = await request.get('/cars').then(response => response.body);
      expect(data).toBeDefined();
   });
});
