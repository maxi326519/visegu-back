import { Router } from "express";
import { Request, Response } from "express";
import {createStorage, getAllStorage, updateStorage, deleteStorage, disableStorage} from "./controllers/storage";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, userId } = req.body;
    if (!name || !userId || userId.length === 0) {
      return res.status(400).json({ error: 'The "name" parameter is required and "userId" must be a non-empty array.' });
    }
    const newStorage = await createStorage(name, userId);
    res.status(200).json(newStorage);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
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

  router.post('/', async (req: Request, res: Response) => {
    try {
      const { storage, userId } = req.body;
      const existingUserIds = await updateStorage(storage, userId);
      res.status(200).json(existingUserIds);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.delete('/:storageId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteStorage(id);
      res.status(200).json({ message: `Storage with ID ${id} successfully removed.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/disable/:storageId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await disableStorage(id);
      res.status(200).json({ message: `Storage with ID ${id} successfully disabled.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;