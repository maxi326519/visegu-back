import request from 'supertest';
import app from './app'; // Suponiendo que la variable 'app' es tu aplicación Express exportada

describe('Rutas de almacenamiento', () => {
  it('debería crear un nuevo almacenamiento', async () => {
    const storageData = {
      name: 'Nuevo Almacenamiento',
      UserId: 1,
    };

    const response = await request(app).post('/').send(storageData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener todos los almacenes', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar el almacenamiento existente', async () => {
    const storageData = {
      id: 1,
      name: 'Almacenamiento Actualizado',
      UserId: 1,
    };

    const response = await request(app).patch('/').send(storageData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('name', 'Almacenamiento Actualizado');
  });

  it('debería eliminar un almacenamiento existente', async () => {
    const response = await request(app).delete('/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Storage with ID 1 successfully removed.');
  });

  it('debería deshabilitar un almacenamiento existente', async () => {
    const response = await request(app).patch('/disable/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Storage with ID 1 successfully disabled.');
  });
});