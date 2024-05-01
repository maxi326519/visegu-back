import { Request, Response, Router } from "express";
import {
  createWorkReport,
  deleteWorkReport,
  getAllWorkReports,
  updateWorkReport,
} from "./controllers/workReport";

const router = Router();

// Ruta para crear un informe de trabajo
router.post("/", async (req, res) => {
  try {
    const newReport = req.body;
    const createdReport = await createWorkReport(newReport);
    res.json(createdReport);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const workReports = await getAllWorkReports();
    res.json(workReports);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const workReport = req.body;
    await updateWorkReport(workReport);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteWorkReport(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
