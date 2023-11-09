import request from 'supertest';
import app from './app'; // Asegúrate de que la ruta sea correcta

describe('Rutas de clientes', () => {
  it('debería crear un nuevo cliente', async () => {
    const newClientData = {
      name: "Client Name",
      customer: "Customer Name",
      phoneNumber: "123-456-7890",
      email: "client@email.com",
      fullName: "Full Name",
      billingAdress: "Billing Address",
      shippingAdress: "Shipping Address",
    };

    const response = await request(app)
      .post('/')
      .send(newClientData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener todos los clientes', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar un cliente existente', async () => {
    const updatedClientData = {
      id: 1, 
      name: "Client Name 1",
      customer: "Customer Name 1",
      phoneNumber: "123-456-7890 1",
      email: "client@email.com 1",
      fullName: "Full Name 1",
      billingAdress: "Billing Address 1",
      shippingAdress: "Shipping Address 1",
    };

    const response = await request(app)
      .patch('/1')
      .send(updatedClientData);

    expect(response.status).toBe(200);
  });

  it('debería eliminar un cliente existente', async () => {
    const response = await request(app)
      .delete('/1')
    expect(response.status).toBe(200);
  });
});
