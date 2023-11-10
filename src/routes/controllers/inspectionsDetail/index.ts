import { InspectionDetail } from "../../../db";

// Define la función para crear un informe de inspección
const createInspectionDetail = async (inspectionData: any) => {

    if (!inspectionData) throw new Error ("data not found")
  
    const newInspectionDetail = await InspectionDetail.create(inspectionData);
    
    return newInspectionDetail;
    }

// Define la función para obtener todos los informes de inspección
const getAllInspectionDetail = async () => {
    const allInspectionDetail = await InspectionDetail.findAll();
  
    return allInspectionDetail;
  }

 // Define la función para actualizar un informe de inspección por su ID
const updateInspectionDetail = async (inspection: any) => {
    const response = await InspectionDetail.findOne({
      where: { id: inspection.id },
    });
  
    if (response) {
      await response.update(inspection);
    } else {
      throw new Error("Inspection not found");
    }
  };
  
  // Define la función para eliminar una inspección por su ID
const deleteInspectionDetail = async (id: string) => {
    const inspection = await InspectionDetail.findOne({ where: { id } });
  
    if (!inspection) {
      throw new Error("Inspection not found");
    }
  
    await inspection.destroy();
  
    return true; // Inspección eliminada con éxito
  }

export { createInspectionDetail, getAllInspectionDetail, updateInspectionDetail, deleteInspectionDetail}