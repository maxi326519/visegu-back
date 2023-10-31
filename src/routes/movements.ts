import { Router } from "express";
import { Request, Response } from "express";
import { getMovements } from "./controllers/movements";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const movements = await getMovements();
    res.status(200).json(movements);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
