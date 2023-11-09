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

 // Define la función para actualizar un informe de inspección por su ID
 const updateWorkReport = async (workData: any) => {
  const response = await WorkReport.findOne({
    where: { id: workData.id },
  });

  if (response) {
    await response.update(workData);
  } else {
    throw new Error("WorkData not found");
  }
};

  // Define la función para eliminar una inspección por su ID
  const deleteWorkReport = async (id: string) => {
    const workReport = await WorkReport.findOne({ where: { id } });
  
    if (!workReport) {
      throw new Error("WorkReport not found");
    }
  
    await workReport.destroy();
  
    return true; // Inspección eliminada con éxito
  }

export {createWorkReport, getAllWorkReports, updateWorkReport, deleteWorkReport}