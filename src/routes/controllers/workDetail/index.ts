import { WorkReportsDetails } from "../../../db";


// Define la función para crear un WorkReportDetail
const createWorkDetail = async (workData: any) => {

    if (!workData) throw new Error ("data not found")
  
    const newWorkDetail = await WorkReportsDetails.create(workData);
    
    return newWorkDetail;
    }

// Define la función para obtener todos los WorkReportDetail
const getAllWorkDetail = async () => {
    const allWorkDetail = await WorkReportsDetails.findAll();
  
    return allWorkDetail;
  }

// Define la función para actualizar un WorkReportDetail por su ID
const updateWorkDetail = async (workData: any) => {
    const response = await WorkReportsDetails.findOne({
      where: { id: workData.id },
    });
  
    if (response) {
      await response.update(workData);
    } else {
      throw new Error("workdetail not found");
    }
  };

// Define la función para eliminar una WorkReportDetail por su ID
const deleteWorkDetail = async (id: string) => {
    const workDetail = await WorkReportsDetails.findOne({ where: { id } });
  
    if (!workDetail) {
      throw new Error("workdetail not found");
    }
  
    await workDetail.destroy();
  
    return true; // workdetail eliminada con éxito
  }

export {createWorkDetail, getAllWorkDetail, updateWorkDetail, deleteWorkDetail}