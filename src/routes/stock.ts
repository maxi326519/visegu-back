import { Router } from "express";
import { Request, Response } from "express";
import {createStock, updateAddStock, updateStockSubtract, setTransfer} from "./controllers/stock";

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
      const { quantity, ProductId, StorageId, user } = req.body;
      const newStock = await createStock(quantity, ProductId, StorageId, user.userId);
      res.status(200).json(newStock);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/ingress', async (req: Request, res: Response) => {
    try {
      const { stockId, quantityToAdd, user } = req.body;
      const updatedStock = await updateAddStock(stockId, quantityToAdd, user.userId);
      res.status(200).json(updatedStock);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/egress', async (req: Request, res: Response) => {
    try {
      const { stockId, quantityToSubtract, user } = req.body;
      const updatedStock = await updateStockSubtract(stockId, quantityToSubtract, user.userId);
      res.status(200).json(updatedStock);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/transfer', async (req: Request, res: Response) => {
    try {
      const { date, ProductId, quantity, StorageId, user } = req.body;
      console.log("ruta", StorageId)
      const result = await setTransfer(date, ProductId, quantity, StorageId, user?.userId);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;