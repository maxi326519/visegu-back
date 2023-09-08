import { Storage } from "../../../db";

const createStorage = async (storageData: string) => {
      const newStorage = await Storage.create({ name: storageData });
      return newStorage;
  };

const getAllStorage = async () => {
    const storage = await Storage.findAll();
    return storage;
  };

const updateStorage = async (storage: any) => {
    const response = await Storage.findOne({
      where: { id: storage.id },
    });
    if (response) await response.update(storage);
    else throw new Error("product not found");
  };

const deleteStorage = async (storageId: string) => {
    const storage = await Storage.findOne({ where: { id: storageId } });
  
    if (!storage) {
      throw new Error("Product not found");
    }
  
    await storage.destroy();
  
    console.log(`Product with ID ${storageId} successfully removed.`);
  };

const disableStorage = async (storageId: string) => {
    const storage = await Storage.findOne({ where: { id: storageId } });
  
    if (!storage) {
      throw new Error("Product not found");
    }
    await storage.update({ disabled: true });
  
    console.log(`Product with ID ${storageId} successfully disabled.`);
  };

export {createStorage, getAllStorage, updateStorage, deleteStorage, disableStorage}