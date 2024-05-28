import { InspectionReport } from "../../../db";
import { Inspection } from "../../../interfaces/ReportsModels/Inspection";

const createInspectionReport = async (inspection: Inspection) => {
  // Check values
  if (!inspection.date) throw new Error("missing parameter: date");
  if (!inspection.userName) throw new Error("missing parameter: userName");
  if (!inspection.userId) throw new Error("missing parameter: userId");

  // Crete report
  const newInspectionReport = await InspectionReport.create({ ...inspection });

  // Return report created
  return newInspectionReport;
};

const getAllInspectionReports = async () => {
  // Get all reports
  const allInspectionReports = await InspectionReport.findAll();

  // Return all reports
  return allInspectionReports;
};

const updateInspectionReports = async (inspection: any) => {
  // Find report
  const inspectionDB = await InspectionReport.findByPk(inspection.numero);
  // Check if exist
  if (!inspectionDB) throw new Error("Inspection not found");

  // Update report
  await inspectionDB.update(inspection);
};

const deleteInspectionReports = async (id: string) => {
  // Find report
  const inspectionDB = await InspectionReport.findByPk(id);

  // Check if exist
  if (!inspectionDB) throw new Error("Inspection not found");

  // Delete report
  await inspectionDB.destroy();
};

export {
  createInspectionReport,
  getAllInspectionReports,
  updateInspectionReports,
  deleteInspectionReports,
};
