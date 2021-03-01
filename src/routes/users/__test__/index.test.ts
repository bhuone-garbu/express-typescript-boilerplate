import request from 'supertest';

import { app } from '../../../app';

const createTestUser = () => {
  return request(app).post('/users').send({
    name: 'test123',
  });
};

it('show all users', async () => {
  await createTestUser();

  const response = await request(app).get('/users').send();

  expect(response.status).toBe(200);
  expect(response.body.length).toBe(3);
});
