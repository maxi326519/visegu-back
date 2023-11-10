import { InspectionReport } from "../../../db";

// Define la función para crear un informe de inspección
const createInspectionReport = async (inspectionData: any) => {

  if (!inspectionData) throw new Error ("data not found")

  const newInspectionReport = await InspectionReport.create(inspectionData);
  
  return newInspectionReport;
  }

// Define la función para obtener todos los informes de inspección
const getAllInspectionReports = async () => {
  const allInspectionReports = await InspectionReport.findAll();

  return allInspectionReports;
}

// Define la función para actualizar un informe de inspección por su ID
const updateInspectionReports = async (inspection: any) => {
  const response = await InspectionReport.findOne({
    where: { id: inspection.id },
  });

  if (response) {
    await response.update(inspection);
  } else {
    throw new Error("Inspection not found");
  }
};
 
// Define la función para eliminar una inspección por su ID
const deleteInspectionReports = async (id: string) => {
  const inspection = await InspectionReport.findOne({ where: { id } });

  if (!inspection) {
    throw new Error("Inspection not found");
  }

  await inspection.destroy();

  return true; // Inspección eliminada con éxito
}

export { createInspectionReport, getAllInspectionReports, updateInspectionReports, deleteInspectionReports }