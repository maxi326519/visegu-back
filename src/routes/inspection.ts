import { Router } from "express";
import { Request, Response } from "express";
import { createInspectionReport, deleteInspectionReports, getAllInspectionReports, updateInspectionReports } from "./controllers/inspections";

const router = Router();


// Ruta para crear un informe de inspección
router.post('/', async (req: Request, res: Response) => {
    try {
      const inspectionData = req.body; // Se espera que los datos del informe se envíen en el cuerpo de la solicitud POST
  
      const newInspectionReport = await createInspectionReport(inspectionData);
  
      res.status(201).json(newInspectionReport);
    } catch (error) {
      res.status(500).json({ error: 'Error creating inspection report' });
    }
  });

  // Ruta para obtener todos los informes de inspección
router.get('/', async (req: Request, res: Response) => {
  const allInspectionReports = await getAllInspectionReports();

  if (allInspectionReports) {
    res.status(200).json(allInspectionReports);
  } else {
    res.status(500).json({ error: 'Error obtaining inspection reports' });
  }
});

// Ruta para actualizar un informe de inspección por su ID
router.patch('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const updatedInspectionData = req.body;

  try {
    await updateInspectionReports({ id, ...updatedInspectionData });
    res.status(200).json({ message: 'Inspection report successfully updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating inspection report' });
  }
});

// Ruta para eliminar una inspección por su ID
router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const isDeleted = await deleteInspectionReports(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Inspection successfully removed' });
    } else {
      res.status(404).json({ error: 'Inspection not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting inspection' });
  }
});

export default router;