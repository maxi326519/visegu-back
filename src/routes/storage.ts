import { Router } from "express";
import { Request, Response } from "express";
import {
  createStorage,
  getAllStorage,
  updateStorage,
  deleteStorage,
  disableStorage,
} from "./controllers/storage";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, UserId } = req.body;
    const newStorage = await createStorage(name, UserId);
    res.status(200).json(newStorage);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const storage = await getAllStorage();
    res.status(200).json(storage);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const { id, name, UserId } = req.body;
    const existingUserIds = await updateStorage(id, name, UserId);
    res.status(200).json(existingUserIds);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteStorage(id);
    res
      .status(200)
      .json({ message: `Storage with ID ${id} successfully removed.` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/disable/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await disableStorage(id);
    res
      .status(200)
      .json({ message: `Storage with ID ${id} successfully disabled.` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
