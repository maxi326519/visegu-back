import { Request, Response, Router } from "express";
import { createClient, deleteClient, getAllClients, updateClient } from "./controllers/clients";
import { Clients } from "../db";

const router = Router();

// Ruta para crear un nuevo cliente
router.post('/', async (req: Request, res: Response) => {
  const clientData = req.body;

  try {
    if (!clientData || !clientData.name || !clientData.email || !clientData.phoneNumber || !clientData.billingAdress || !clientData.shippingAdress) {
      res.status(400).json({ error: 'Missing parameters in customer data' });
      return;
    }

    // Verificar si el correo electrónico ya existe en la base de datos
    const existingClient = await Clients.findOne({ where: { email: clientData.email } });
    if (existingClient) {
      res.status(400).json({ error: 'The client already exists' });
      return;
    }

    const newClient = await createClient(clientData);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error creating client' });
  }
});

// Ruta para obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clients = await getAllClients();
    res.json(clients);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un cliente por su ID
router.put('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const updatedClientData = req.body;

  try {
    if (!updatedClientData) {
      res.status(400).json({ error: 'Customer data not provided' });
      return;
    }

    await updateClient({ id, ...updatedClientData });
    res.status(200).json({ message: 'Client updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating client' });
  }
});

// Ruta para eliminar un cliente por su ID
router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const isDeleted = await deleteClient(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Client successfully deleted' });
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client' });
  }
});

export default router;