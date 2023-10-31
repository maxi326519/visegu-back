import request from 'supertest';
import app from './app'; // Asegúrate de que la variable 'app' es tu aplicación Express exportada

describe('Rutas de usuarios', () => {
  it('debería crear un nuevo usuario', async () => {
    const userData = {
      name: 'Nuevo Usuario',
      email: 'nuevousuario@example.com',
      // Otros campos requeridos para la creación del usuario
    };

    const response = await request(app).post('/').send(userData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener un usuario por nombre y valor', async () => {
    const response = await request(app).get('/name/Nuevo Usuario');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Nuevo Usuario');
  });

  it('debería obtener todos los usuarios', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar un usuario existente', async () => {
    const userData = {
      id: 1,
      name: 'Usuario Actualizado',
      email: 'usuarioactualizado@example.com',
      // Otros campos que quieres actualizar
    };

    const response = await request(app).patch('/').send(userData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('msg', 'update user successfully');
  });

  it('debería deshabilitar un usuario existente', async () => {
    const response = await request(app).patch('/1').send({ disabled: true });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'User disabled successfully');
  });

  it('debería eliminar un usuario existente', async () => {
    const response = await request(app).delete('/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'User deleted successfully');
  });
});