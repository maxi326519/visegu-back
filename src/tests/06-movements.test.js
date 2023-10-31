import request from 'supertest';
import app from './app'; // Asegúrate de que la variable 'app' sea tu aplicación Express exportada

describe('Ruta de movimientos', () => {
  it('debería obtener todos los movimientos', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
