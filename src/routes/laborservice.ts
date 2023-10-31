import { Router } from "express";
import { Request, Response } from "express";
import { LaborServices } from "../db";
import { LaborServicesTS } from "../interfaces/LaborServices";

const router = Router();

// Ruta para crear un nuevo servicio de mano de obra
router.post('/', async (req: Request, res: Response) => {
    try {
      const laborServiceData = req.body; // Asegúrate de que los datos del cuerpo de la solicitud cumplan con la interfaz
  
      // Verificar si los datos requeridos están presentes
      if (!laborServiceData.codeNumber || !laborServiceData.name) {
        throw new Error("The 'codeNumber' and 'name' fields are required.");
      }
  
      // Crear un nuevo servicio de mano de obra en la base de datos
      const newLaborService = await LaborServices.create(laborServiceData);
  
      res.status(201).json(newLaborService);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
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

  // Ruta para actualizar un servicio de mano de obra
router.patch('/:id', async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const updatedData: LaborServicesTS = req.body; // Asegúrate de que los datos del cuerpo de la solicitud cumplan con la interfaz
  
      // Verificar si el servicio de mano de obra existe
      const existingLaborService = await LaborServices.findByPk(id);
  
      if (!existingLaborService) {
        throw new Error("Labor service not found.");
      }
  
      // Realiza la actualización con los nuevos datos proporcionados
      const updatedLaborService = await existingLaborService.update(updatedData);
  
      res.status(200).json(updatedLaborService);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // Ruta para eliminar un servicio de mano de obra
router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
  
      // Verificar si el servicio de mano de obra existe
      const existingLaborService = await LaborServices.findByPk(id);
  
      if (!existingLaborService) {
        throw new Error("Labor service not found.");
      }
  
      // Realiza la eliminación del servicio de mano de obra
      await existingLaborService.destroy();
  
      res.status(204).send(); // Respuesta exitosa sin contenido
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

export default router;