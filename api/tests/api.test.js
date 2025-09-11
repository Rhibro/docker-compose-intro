const request = require('supertest');
const { app, pool } = require('../server');

let server;


beforeAll(() => {
  server = app.listen(4000); // start server on test port
});

afterAll((done) => {
  server.close(done); // close server so Jest exits cleanly
});

describe('API Endpoints', () => {
  it('should return "Hello from the API!" on GET /api', async () => {
    // Gör ett GET-anrop till vår /api-endpoint
    const response = await request(server).get('/api');

    // Kontrollerar att svaret har status 200 (OK)
    expect(response.statusCode).toBe(200);

    // Kontrollerar att meddelandet stämmer
    expect(response.body.message).toBe('Hello from the API!');
  });
});
