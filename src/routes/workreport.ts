import { Router } from "express";
import { createWorkReport, deleteWorkReport, getAllWorkReports, updateWorkReport } from "./controllers/workReport";
import { WorkReportTS } from "../interfaces/ReportsModels/Work";

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

  // Ruta para actualizar un informe de trabajo
router.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const updatedData: WorkReportTS = req.body;
  
    try {
      const updatedReport = await updateWorkReport(id, updatedData);
      res.json(updatedReport);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

// Ruta para eliminar un informe de trabajo
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
  
    try {
      await deleteWorkReport(id);
      res.json({ message: 'Job report successfully deleted' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

export default router;
