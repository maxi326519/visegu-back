import { Router } from "express";
import { Request, Response } from "express";
import {createProduct, getAllProducts, updateProducts, deleteProduct, disableProduct} from "./controllers/product";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
      const productData = req.body;
      const newProduct = await createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/', async (req: Request, res: Response) => {
    try {
      const products = await getAllProducts();
      res.status(200).json(products);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch("/", async (req: Request, res: Response) => {
    try {
      const product = req.body;
      await updateProducts(product);
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
  }
});

router.delete('/products/:productId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteProduct(id);
      res.status(200).json({ message: `Product with ID ${id} successfully removed.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.patch('/products/disable/:productId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await disableProduct(id);
      res.status(200).json({ message: `Product with ID ${id} successfully disabled.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;