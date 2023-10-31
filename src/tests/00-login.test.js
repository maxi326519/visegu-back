import request from 'supertest';
import app from './app'; // Asegúrate de que la variable 'app' sea tu aplicación Express exportada
import jwt from 'jsonwebtoken';

// Función de ayuda para generar un token JWT para pruebas
const generateToken = (user) => {
  return jwt.sign(user, 'tu_secreto_jwt', { expiresIn: '1h' });
};

describe('Rutas protegidas por JWT', () => {
  it('debería obtener datos protegidos con token', async () => {
    // Crea un usuario ficticio
    const user = {
      id: 1,
      username: 'usuario_prueba',
    };

    // Genera un token para el usuario
    const token = generateToken(user);

    // Realiza una solicitud protegida por JWT incluyendo el token en el encabezado 'Authorization'
    const response = await request(app)
      .get('/ruta_protegida')
      .set('Authorization', `Bearer ${token}`);

    // Realiza las expectativas sobre la respuesta
    expect(response.status).toBe(200);
    // ...otras expectativas...
  });
});