import { WorkReport } from "../../../db";
import { WorkReportTS } from "../../../interfaces/ReportsModels/Work";

const createWorkReport = async (newReport: any) => { // NO ESTOY USANDO LA INTERFACE COMO DATO PORQUE TIENE PARAMETROS QUE NO ACEPTA EN EL MODELO POR ESO LO DEJE EN ANY

    // Verificar si name existe
  if (!newReport) throw new Error("missing parameter");

    const createdReport = await WorkReport.create(newReport);
    return createdReport;
  }

const getAllWorkReports = async()=> {
    const workReports = await WorkReport.findAll();
    return workReports;
  }

const updateWorkReport = async (reportId: string, updatedData: WorkReportTS)=> {
    const existingReport = await WorkReport.findByPk(reportId);
  
    if (!existingReport) {
      throw new Error('Job report not found');
    }
  
    // Realiza la actualización con los nuevos datos proporcionados
    const updatedReport = await existingReport.update(updatedData);
  
    return updatedReport;
  }

const deleteWorkReport = async (reportId: string) => {
    const existingReport = await WorkReport.findByPk(reportId);
  
    if (!existingReport) {
      throw new Error('Job report not found');
    }
  
    // Realiza la eliminación del informe de trabajo
    await existingReport.destroy();
  
    return { message: "Successfully deleted user" };
  }
export {createWorkReport, getAllWorkReports, updateWorkReport, deleteWorkReport}