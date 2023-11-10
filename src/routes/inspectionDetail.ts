import { Router } from "express";
import { Request, Response } from "express";
import { createInspectionDetail, deleteInspectionDetail, getAllInspectionDetail, updateInspectionDetail } from "./controllers/inspectionsDetail";

const router = Router();

// Ruta para crear un nuevo detalle de inspección
router.post('/', async (req: Request, res: Response) => {
    const inspectionData = req.body;
  
    try {
      if (!inspectionData) {
        res.status(400).json({ error: 'Inspection data not provided' });
        return;
      }
  
      const newInspectionDetail = await createInspectionDetail(inspectionData);
      res.status(201).json(newInspectionDetail);
    } catch (error) {
      res.status(500).json({ error: 'Error creating inspection detail' });
    }
  });

  // Ruta para obtener todos los detalles de inspección
router.get('/', async (req: Request, res: Response) => {
    try {
      const allInspectionDetails = await getAllInspectionDetail();
      res.status(200).json(allInspectionDetails);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get all inspection details' });
    }
  });

// Ruta para actualizar un informe de inspección por su ID
router.patch('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const updatedInspectionData = req.body;
  
    try {
      await updateInspectionDetail({ id, ...updatedInspectionData });
      res.status(200).json({ message: 'Inspection report successfully updated' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating inspection report' });
    }
  });

// Ruta para eliminar un detalle de inspección por su ID
router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
  
    try {
      const isDeleted = await deleteInspectionDetail(id);
      if (isDeleted) {
        res.status(200).json({ message: 'Inspection detail successfully deleted' });
      } else {
        res.status(404).json({ error: 'Inspection detail not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting inspection detail' });
    }
  });
  
export default router;