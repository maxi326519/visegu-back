import request from 'supertest';
import app from './app'; // Suponiendo que la variable 'app' es tu aplicación Express exportada

describe('Rutas de stock', () => {
  it('debería crear un nuevo stock', async () => {
    const stockData = {
      quantity: 100,
      ProductId: 1,
      StorageId: 1,
      user: { userId: 1 },
    };

    const response = await request(app).post('/').send(stockData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener el stock', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar el stock en caso de ingreso', async () => {
    const ingressData = {
      StockId: 1,
      quantity: 50,
      user: { userId: 1 },
    };

    const response = await request(app).patch('/ingress').send(ingressData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería actualizar el stock en caso de egreso', async () => {
    const egressData = {
      StockId: 1,
      quantity: 30,
      user: { userId: 1 },
    };

    const response = await request(app).patch('/egress').send(egressData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería transferir el stock a otro almacen', async () => {
    const transferData = {
      date: '2023-11-01',
      quantity: 20,
      StockId: 1,
      StorageId: 2,
      user: { userId: 1 },
    };

    const response = await request(app).patch('/transfer').send(transferData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Stock transferred successfully');
  });
});