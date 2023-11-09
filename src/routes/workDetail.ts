import { Router } from "express";
import { Request, Response } from "express";
import { createWorkDetail, deleteWorkDetail, getAllWorkDetail, updateWorkDetail } from "./controllers/workDetail";

const router = Router();

// Ruta para crear un detalle de informe de trabajo
router.post('/', async (req: Request, res: Response) => {
    const workData = req.body;
  
    try {
      if (!workData) {
        res.status(400).json({ error: 'Job details not provided' });
        return;
      }
  
      const newWorkDetail = await createWorkDetail(workData);
      res.status(201).json(newWorkDetail);
    } catch (error) {
      res.status(500).json({ error: 'Error creating job report detail' });
    }
  });

// Ruta para obtener todos los detalles de informes de trabajo
router.get('/', async (req: Request, res: Response) => {
    try {
      const allWorkDetail = await getAllWorkDetail();
      res.status(200).json(allWorkDetail);
    } catch (error) {
      res.status(500).json({ error: 'Error getting all job report details' });
    }
  });

// Ruta para actualizar un detalle de informe de trabajo por su ID
router.patch('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const updatedWorkDetail = req.body;
  
    try {
      await updateWorkDetail({ id, ...updatedWorkDetail });
      res.status(200).json({ message: 'workdetail report successfully updated' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating workdetail report' });
    }
  });

// Ruta para eliminar un detalle de informe de trabajo por su ID
router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
  
    try {
      await deleteWorkDetail(id);
      res.status(200).json({ message: 'Job report detail successfully deleted'});
    } catch (error) {
      res.status(500).json({ error: 'Error deleting job report detail' });
    }
  });
  
export default router;