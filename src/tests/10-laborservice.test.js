import request from 'supertest';
import app from './app'; // Asegúrate de que la ruta sea correcta

describe('Rutas de servicios de mano de obra', () => {
  it('debería crear un nuevo servicio de mano de obra', async () => {
    const newLaborServiceData = {
      // Define los datos del nuevo servicio de mano de obra aquí
      codeNumber: '123',
      name: 'Servicio de Mano de Obra 1',
    };

    const response = await request(app)
      .post('/')
      .send(newLaborServiceData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener todos los servicios de mano de obra', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar un servicio de mano de obra existente', async () => {
    const updatedLaborServiceData = {
      // Define los datos actualizados del servicio de mano de obra aquí
      id: 1,
      codeNumber: '123',
      name: 'Servicio de Mano de Obra Actualizado',
    };

    const response = await request(app)
      .patch('/1')
      .send(updatedLaborServiceData);

    expect(response.status).toBe(200);
  });

  it('debería eliminar un servicio de mano de obra existente', async () => {
    const response = await request(app)
      .delete('/1')

    expect(response.status).toBe(204);
  });
});
