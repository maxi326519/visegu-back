import { Request, Response, Router } from "express";
import { createWorkReport, deleteWorkReport, getAllWorkReports, updateWorkReport } from "./controllers/workReport";

const router = Router();

// Ruta para crear un informe de trabajo
router.post('/', async (req, res) => {
    const newReport = req.body;
  
    try {
      const createdReport = await createWorkReport(newReport);
      res.json(createdReport);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

// Ruta para obtener todos los informes de trabajo
router.get('/', async (req, res) => {
    try {
      const workReports = await getAllWorkReports();
      res.json(workReports);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

// Ruta para actualizar un informe de trabajo por su ID
router.patch('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const updatedInspectionData = req.body;

  try {
    await updateWorkReport({ id, ...updatedInspectionData });
    res.status(200).json({ message: 'workreport successfully updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating workreport report' });
  }
});

// Ruta para eliminar un informe de trabajo por su ID
router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const isDeleted = await deleteWorkReport(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Job report successfully deleted' });
    } else {
      res.status(404).json({ error: 'Job report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job report' });
  }
});

export default router;
