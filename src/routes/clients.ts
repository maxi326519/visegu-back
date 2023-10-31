import { Router } from "express";
import { createClient, deleteClient, getAllClients, updateClient } from "./controllers/clients";
import { ClientsTS } from "../interfaces/ClientsTS";

const router = Router();

// Ruta para crear un cliente
router.post('/', async (req, res) => {
    try {
      const clientData: ClientsTS = req.body;
      const newClient = await createClient(clientData);
      res.status(201).json(newClient);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
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

// Ruta para actualizar un cliente
router.patch('/:id', async (req, res) => {
  const {id}  = req.params;

  const updatedData: ClientsTS = req.body;

  try {
    const client = await updateClient(id, updatedData);
    res.json(client);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para eliminar un cliente por su ID
router.delete('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const deletedClient = await deleteClient(id);
    res.json(deletedClient);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;