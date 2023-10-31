import { Storage } from "../../../db";

const createStorage = async (name: string) => {
  // Verificar si name existe
  if (!name) throw new Error("missing parameter name");

  // Creamos el Storage
  const newStorage: any = await Storage.create({
    name: name,
  });

  return newStorage.dataValues;
};

const getAllStorage = async () => {
  // Obtener todos los Storage y sus usuarios asociados
  const storages: any = await Storage.findAll();

  // Retornamos todos los storages
  return storages;
};

const updateStorage = async (id: string, name: string) => {
  // Verificamos los parametros
  if (!name) throw new Error("Missing parameter name");

  // Obtenermos el storage
  const currentStorage = await Storage.findOne({ where: { id } });

  // Verificamso que exista el storage
  if (!currentStorage) throw new Error();

  // Actualizar el nombre del Storage si es necesario
  await currentStorage?.update({ name: name });

  return currentStorage.dataValues;
};

const deleteStorage = async (storageId: string) => {
  const storage = await Storage.findOne({ where: { id: storageId } });

  if (!storage) throw new Error("Product not found");

  await storage.destroy();
};

const disableStorage = async (storageId: string) => {
  const storage: any = await Storage.findOne({ where: { id: storageId } });

  // Verificar el storage
  if (!storage) throw new Error("Storage not found");

  // Habilitar o desabilitar
  if (storage.disabled) {
    await storage.update({ disabled: false });
  } else {
    await storage.update({ disabled: true });
  }
};

export {
  createStorage,
  getAllStorage,
  updateStorage,
  deleteStorage,
  disableStorage,
};
