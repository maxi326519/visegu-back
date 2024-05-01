import { WorkReport, WorkTable } from "../../../db";
import { WorkReportTS } from "../../../interfaces/ReportsModels/Work";

const createWorkReport = async (
  report: WorkReportTS
): Promise<WorkReportTS> => {
  // Get data and table data
  const { tableData, ...workReport } = report;

  // Save date
  const createdReport = await WorkReport.create(workReport as any);
  for (const item of tableData) {
    await WorkTable.create(item as any);
  }

  // Return report
  return {
    ...createdReport.dataValues,
    tableData,
  };
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
