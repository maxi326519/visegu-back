import request from 'supertest';
import app from './app';

describe('Rutas de informes de trabajo', () => {
  it('debería crear un nuevo informe de trabajo', async () => {
    const newReport = {
  customer: "Customer Name",
  location: "Location Name",
  timeToStartServices: "Service Start Time",
  equipment: "Equipment Name",
  dateOfRepair: "Repair Date",
  timeFinishService: "Service Finish Time",
  licensePlate: "License Plate",
  PO: "Purchase Order",
  VIN: "Vehicle Identification Number",
  mechanicName: "Mechanic Name",
    };

    const response = await request(app)
      .post('/')
      .send(newReport);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería obtener todos los informes de trabajo', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería actualizar un informe de trabajo existente', async () => {
    const updatedData = {
  id: 1,
  customer: "Customer Name 1",
  location: "Location Name 1",
  timeToStartServices: "Service Start Time 1",
  equipment: "Equipment Name 1",
  dateOfRepair: "Repair Date 1",
  timeFinishService: "Service Finish Time 1",
  licensePlate: "License Plate 1",
  PO: "Purchase Order 1",
  VIN: "Vehicle Identification Number 1",
  mechanicName: "Mechanic Name 1",
    };

    const response = await request(app)
      .patch('/1')
      .send(updatedData);

    expect(response.status).toBe(200);
  });

  it('debería eliminar un informe de trabajo existente', async () => {
    const response = await request(app)
      .delete('/1')

    expect(response.status).toBe(200);
  });
});
