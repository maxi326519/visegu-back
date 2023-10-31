import { LaborServices } from "../../../db";
import { LaborServicesTS } from "../../../interfaces/LaborServices";

const createLaborService = async (laborServiceData: any) => {
    // Verificar si los datos requeridos están presentes
    if (!laborServiceData.codeNumber || !laborServiceData.name) {
      throw new Error("The 'codeNumber' and 'name' fields are required.");
    }
  
    // Crear un nuevo servicio de mano de obra en la base de datos
    const newLaborService = await LaborServices.create(laborServiceData);
  
    return newLaborService;
  };

const getAllLaborServices = async () => {
    // Consulta la base de datos para obtener todos los servicios de mano de obra
    const laborServices = await LaborServices.findAll();
  
    return laborServices;
  };

const updateLaborService = async (laborServiceId: string, updatedData: LaborServicesTS)=> {
    // Verificar si el servicio de mano de obra existe
    const existingLaborService = await LaborServices.findByPk(laborServiceId);
  
    if (!existingLaborService) {
      throw new Error("Labor service not found.");
    }
  
    // Realiza la actualización con los nuevos datos proporcionados
    const updatedLaborService = await existingLaborService.update(updatedData);
  
    return updatedLaborService;
  };

const deleteLaborService = async (laborServiceId: string) => {
    // Verificar si el servicio de mano de obra existe
    const existingLaborService = await LaborServices.findByPk(laborServiceId);
  
    if (!existingLaborService) {
      throw new Error("Labor service not found.");
    }
  
    // Realiza la eliminación del servicio de mano de obra
    await existingLaborService.destroy();
  };
export { createLaborService, getAllLaborServices, updateLaborService, deleteLaborService }