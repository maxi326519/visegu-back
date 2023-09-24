import { Router } from "express";
import { Request, Response } from "express";
import { loginUser } from "./controllers/login";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await loginUser({ email, password });
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  export default router;