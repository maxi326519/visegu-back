import request from 'supertest';
import app from './app';

describe('Rutas de proveedores', () => {
  it('debería crear un nuevo proveedor', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'Nuevo Proveedor' });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Nuevo Proveedor');
  });

  it('debería obtener todos los proveedores', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar un proveedor existente', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'Proveedor a Actualizar' });

    const updatedResponse = await request(app)
      .patch(`/${response.body.id}`)
      .send({ name: 'Proveedor Actualizado' });

    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.body.name).toBe('Proveedor Actualizado');
  });

  it('debería eliminar un proveedor existente', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'Proveedor a Eliminar' });

    const deleteResponse = await request(app)
      .delete(`/${response.body.id}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe(`Proveedor con ID ${response.body.id} eliminado correctamente.`);
  });
});