import { Router } from "express";
import { Request, Response } from "express";
import { loginUser } from "./controllers/login";
import { verificarToken } from "./controllers/verificacion";
import { User } from "../db";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/token", verificarToken, async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    if (!user) throw new Error("User not found");

    const userData = await User.findByPk(user.userId, {
      attributes: { exclude: ["password"] },
    });

    if (!userData) throw new Error("User not found");

    res.status(200).json(userData);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
