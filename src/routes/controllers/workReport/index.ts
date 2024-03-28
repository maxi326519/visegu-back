import { WorkReportTS } from "../../../interfaces/ReportsModels/Work";
import { WorkReport } from "../../../db";

const createWorkReport = async (newReport: WorkReportTS) => {
  const createdReport = await WorkReport.create(newReport as any);
  return createdReport;
};

const getAllWorkReports = async () => {
  const workReports = await WorkReport.findAll();
  return workReports;
};

// Define la función para actualizar un informe de inspección por su ID
const updateWorkReport = async (workReport: WorkReportTS) => {
  // Get work report
  const response = await WorkReport.findByPk(workReport.id);
  if (!response) throw new Error("Work Report not found");

  // Update data
  await response.update(workReport);
};

// Define la función para eliminar una inspección por su ID
const deleteWorkReport = async (id: string) => {
  // Get work report
  const workReport = await WorkReport.findByPk(id);
  if (!workReport) throw new Error("Work Report not found");

  // Delete data
  await workReport.destroy();
};

export {
  createWorkReport,
  getAllWorkReports,
  updateWorkReport,
  deleteWorkReport,
};
