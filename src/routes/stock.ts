import { Router } from "express";
import { Request, Response } from "express";
import {createStock, updateAddStock, updateStockSubtract} from "./controllers/stock";

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
      const { quantity, ProductId, StorageId } = req.body;
      const newStock = await createStock(quantity, ProductId, StorageId);
      res.status(200).json(newStock);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/ingress', async (req: Request, res: Response) => {
    try {
      const { stockId, quantityToAdd } = req.body;
      const updatedStock = await updateAddStock(stockId, quantityToAdd);
      res.status(200).json(updatedStock);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/egress', async (req: Request, res: Response) => {
    try {
      const { stockId, quantityToSubtract } = req.body;
      const updatedStock = await updateStockSubtract(stockId, quantityToSubtract);
      res.status(200).json(updatedStock);
    } catch (error:any) {

      res.status(500).json({ error: error.message });
    }
  });

export default router;