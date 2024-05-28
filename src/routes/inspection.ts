import { Request, Response } from "express";
import { Router } from "express";
import {
  createInspectionReport,
  deleteInspectionReports,
  getAllInspectionReports,
  updateInspectionReports,
} from "./controllers/inspections";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    // Get inspection data
    const inspectionData = req.body;

    // Create new inspection
    const newInspectionReport = await createInspectionReport(inspectionData);

    // Return the inspection created
    res.status(201).json(newInspectionReport);
  } catch (error) {
    res.status(500).json({ error: "Error creating inspection report" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    // Get all inspection
    const allInspectionReports = await getAllInspectionReports();

    // Return inspection reports
    res.status(200).json(allInspectionReports);
  } catch (error) {
    res.status(500).json({ error: "Error geting inspection reports" });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    // Get inspection report
    const inspection = req.body;

    // Update report
    await updateInspectionReports(inspection);

    // Return confirmation
    res.status(200).json({ message: "Inspection successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating inspection report" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    // Get id from params
    const id = req.params.id;

    // Delete report
    await deleteInspectionReports(id);

    // Return confirmation
    res.status(200).json({ message: "Inspection successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting inspection" });
  }
});

export default router;
