import { Router } from "express";
import { Request, Response } from "express";
import { deleteMovements, getMovements } from "./controllers/movements";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const movements = await getMovements();
    res.status(200).json(movements);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    await deleteMovements(id);
    res.status(200).json({ message: "Move successfully reversed" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
