import { Router } from "express";
import { Request, Response } from "express";
import { LaborServices } from "../db";
import { createLaborService, deleteLaborService, updateLaborService } from "./controllers/laborservice";

const router = Router();

// Ruta para crear un nuevo servicio de mano de obra
router.post('/', async (req: Request, res: Response) => {
  const laborServiceData = req.body;

  try {
    if (!laborServiceData) {
      res.status(400).json({ error: 'Labor service data not provided' });
      return;
    }

    const newLaborService = await createLaborService(laborServiceData);
    res.status(201).json(newLaborService);
  } catch (error) {
    res.status(500).json({ error: 'Error creating labor service' });
  }
});

  // Ruta para obtener todos los servicios de mano de obra
router.get('/', async (req: Request, res: Response) => {
    try {
      // Consulta la base de datos para obtener todos los servicios de mano de obra
      const laborServices = await LaborServices.findAll();
  
      res.status(200).json(laborServices);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

// Ruta para actualizar un servicio de mano de obra por su ID
router.patch('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const updatedLaborServiceData = req.body;

  try {
    if (!updatedLaborServiceData) {
      res.status(400).json({ error: 'Labor service data not provided' });
      return;
    }

    await updateLaborService({ id, ...updatedLaborServiceData });
    res.status(200).json({ message: 'Successfully updated labor service' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating labor service' });
  }
});

// Ruta para eliminar un servicio de mano de obra por su ID
router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const isDeleted = await deleteLaborService(id);
    if (isDeleted) {
      res.status(200).json({ message: 'laborService successfully removed' });
    } else {
      res.status(404).json({ error: 'Labor service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting labor service' });
  }
});

export default router;