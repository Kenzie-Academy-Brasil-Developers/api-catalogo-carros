import { request } from '../utils/request';

describe('Unit test: get user', () => {
   it('should be able to get car with sucess', async () => {
      const data = await request
         .get('/cars')
         .expect(200)
         .then(response => response.body);

      expect(data).toBeDefined();
   });
});
