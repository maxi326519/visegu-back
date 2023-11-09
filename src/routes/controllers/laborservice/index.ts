import { LaborServices } from "../../../db";

const createLaborService = async (laborServiceData: any) => {
    // Verificar si los datos requeridos están presentes
    if (!laborServiceData) throw new Error("data not found}");

  
    // Crear un nuevo servicio de mano de obra en la base de datos
    const newLaborService = await LaborServices.create(laborServiceData);
  
    return newLaborService;
  };

const getAllLaborServices = async () => {
    // Consulta la base de datos para obtener todos los servicios de mano de obra
    const laborServices = await LaborServices.findAll();
  
    return laborServices;
  };

// Define la función para actualizar un informe de LaborService por su ID
const updateLaborService = async (laborService: any) => {
  const response = await LaborServices.findOne({
    where: { id: laborService.id },
  });

  if (response) {
    await response.update(laborService);
  } else {
    throw new Error("laborService not found");
  }
};

// Define la función para eliminar una LaborService por su ID
const deleteLaborService = async (id: string) => {
  const laborService = await LaborServices.findOne({ where: { id } });

  if (!laborService) {
    throw new Error("laborService not found");
  }

  await laborService.destroy();

  return true; // LaborService eliminada con éxito
}

export { createLaborService, getAllLaborServices, updateLaborService, deleteLaborService }