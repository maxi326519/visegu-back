import { Storage, User } from "../../../db";

const createStorage = async (name: string, userId: string[]) => {
  if (!userId || userId.length === 0) {
    throw new Error('The "userId" parameter is required and must be a non-empty array.');
  }
  const newStorage: any = await Storage.create({
    name: name,
  });
  for (const id of userId) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await newStorage.addStorage(user);
      }
    } catch (error: any) {
      console.error(`Error searching for user with ID ${id}: ${error.message}`);
    }
  }
  return newStorage;
};


const getAllStorage = async () => {
    const storage = await Storage.findAll();
    return storage;
  };

  const updateStorage = async (storage: any, userId: string[]) => {
    const existingUserIds = await Storage.findAll({
      where: { StorageId: storage.id },
      attributes: ['UserId'],
      raw: true,
    }).then((userIds: any) => userIds.map((user: any) => user.UserId));
    for (const id of userId) {
      if (!existingUserIds.includes(id)) {
        await Storage.create({
          UserId: id,
          StorageId: storage.id,
        });
      }
    }
    const response = await Storage.findOne({
      where: { id: storage.id },
    });
    if (response) {
      await response.update(storage);
    } else {
      throw new Error("Almacenamiento no encontrado");
    }
    return existingUserIds;
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

export {createStorage, getAllStorage, updateStorage, deleteStorage, disableStorage};