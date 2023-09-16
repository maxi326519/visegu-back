import { Router } from "express";
import { Request, Response } from "express";
import {
  setUser,
  getUser,
  getAllUsers,
  updateUser,
  disableUser,
  deleteUser,
  loginUser,
} from "./controllers/users";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const response = await setUser(user);
    res.status(200).json(response);
  } catch (error: any) {
    switch (error.errors?.[0].type) {
      case "unique violation":
        res.status(400).send({ error: error.errors[0].message });
        break;
      case "notNull Violation":
        res
          .status(500)
          .json({ error: `missing parameter (${error.errors[0].path})` });
        break;
      default:
        res.status(500).json({ error: error.message });
        break;
    }
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:name/:value', async (req, res) => {
  try {
    const { name, value } = req.params;
    const user = await getUser(name, value);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al buscar el usuario' });
  }
});

router.get("/", async (_, res: Response) => {
  try {
    const response = await getAllUsers();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    await updateUser(userData);
    res.status(200).json({ msg: "update user successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { disabled } = req.body;

    if (disabled === undefined) {
      throw new Error('The "disable" field is required in the request body');
    }

    await disableUser(id, disabled);

    res.json({ message: `User ${disabled ? 'disabled' : 'enabled'} successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error changing user status' });
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteUser(id);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  });
  

export default router;
