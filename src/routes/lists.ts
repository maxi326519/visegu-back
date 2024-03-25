import { deleteList, getList, setList } from "./controllers/lists";
import { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, values } = req.body;

    const response = await setList(name, values);

    res.status(200).json(response);
  } catch (error: any) {
    res.status(200).json({ error: error });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await getList();

    res.status(200).json({ lists: response });
  } catch (error: any) {
    res.status(200).json({ error: error });
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const { name, values } = req.body;

    await deleteList(name, values);

    res.status(200).json({ message: "Delete success" });
  } catch (error: any) {
    res.status(200).json({ error: error });
  }
});

export default router;
