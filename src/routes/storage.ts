import { Router } from "express";
import { Request, Response } from "express";
import {createStorage, getAllStorage, updateStorage, deleteStorage, disableStorage} from "./controllers/storage";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
    return res.status(400).json({ message: 'The "name" field is required' });
    }
    const newStorage = await createStorage(name);
    res.status(201).json(newStorage);
  } catch (error) {
    console.error('Error creating storage:', error);
    res.status(500).json({ message: 'Error creating storage' });
  }
});

router.get('/', async (req: Request, res: Response) => {
    try {
      const storage = await getAllStorage();
      res.status(200).json(storage);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch("/", async (req: Request, res: Response) => {
    try {
      const storage = req.body;
      await updateStorage(storage);
      res.status(200).json({ message: "Storage updated successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
  }
});

router.delete('/storage/:storageId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteStorage(id);
      res.status(200).json({ message: `Storage with ID ${id} successfully removed.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/storage/disable/:storageId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await disableStorage(id);
      res.status(200).json({ message: `Storage with ID ${id} successfully disabled.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;