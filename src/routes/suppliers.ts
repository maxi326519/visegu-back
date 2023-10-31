import { Router } from "express";
import { Request, Response } from "express";
import { createSupplier, deleteSuppliers, getAllSuppliers, updateSuppliers } from "./controllers/suppliers";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const supplier = req.body.name;
    const newSupplier = await createSupplier(supplier);
    res.status(201).json(newSupplier);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const supplier = await getAllSuppliers();
    res.status(200).json(supplier);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const updatedSupplierName = req.body.name;
    const updatedSupplier = await updateSuppliers(id, updatedSupplierName);
    res.status(200).json(updatedSupplier);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteSuppliers(id);
    res.status(200).json({ message: `Supplier with ID ${id} successfully deleted.` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;