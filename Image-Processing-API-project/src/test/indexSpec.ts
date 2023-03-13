import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (): Promise<void> => {
    const response = await request.get('/api?name=fjord&width=100&height=100');
    expect(response.status).toBe(200);
  });
});
