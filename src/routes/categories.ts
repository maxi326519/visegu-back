import { Router } from "express";
import { Request, Response } from "express";
import {createCategory, getAllCategories, updateCategory, deleteCategory} from "./controllers/categories";

const router = Router();


router.post('/', async (req: Request, res: Response) => {
    try {
      const category = req.body.name;
      const newCategory = await createCategory(category);
      res.status(201).json(newCategory);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/', async (req: Request, res: Response) => {
    try {
      const categories = await getAllCategories();
      res.status(200).json(categories);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.put('/', async (req: Request, res: Response) => {
    try {
      const categoryId = req.params.categoryId;
      const updatedCategoryName = req.body.updatedCategoryName;
      const updatedCategory = await updateCategory(categoryId, updatedCategoryName);
      res.status(200).json(updatedCategory);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

router.delete('/categories/:categoryId', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await deleteCategory(id);
      res.status(200).json({ message: `Category with ID ${id} successfully deleted.` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });


export default router;