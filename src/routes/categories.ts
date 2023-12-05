import { Request, Response } from "express";
import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "./controllers/categories";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const category = req.body.name;
    const newCategory = await createCategory(category);
    res.status(201).json(newCategory);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCategoryName = req.body.name;
    const updatedCategory = await updateCategory(id, updatedCategoryName);
    res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCategory(id);
    res
      .status(200)
      .json({ message: `Category with ID ${id} successfully deleted.` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
