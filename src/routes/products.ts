import { Router } from "express";
import { Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  updateProducts,
  deleteProduct,
  disableProduct,
} from "./controllers/product";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
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

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteProduct(id);
    res
      .status(200)
      .json({ message: `Product with ID ${id} successfully removed.` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { disabled } = req.body;

    if (disabled === undefined) {
      throw new Error('The "disable" field is required in the request body');
    }

    await disableProduct(id, disabled);

    res.json({
      message: `Product ${disabled ? "disabled" : "enabled"} successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error changing product status" });
  }
});

export default router;
