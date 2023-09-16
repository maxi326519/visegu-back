import { Storage, User } from "../../../db";
import { StorageTS } from "../../../interfaces/StorageTS";
import { Model } from "sequelize";
import { UserTS } from "../../../interfaces/UserTS";

const createStorage = async (name: string, UserId: string[]) => {
  // Verificar si name existe
  if (!name) throw new Error("missing parameter name");

  // Verificar si userId es un array
  if (!Array.isArray(UserId)) throw new Error("UserId is not an array");

  // Creamos el Storage
  const newStorage: any = await Storage.create({
    name: name,
  });

  // Vinculamos los usuarios al Storage
  for (const id of UserId) {
    const user = await User.findByPk(id);
    if (user) {
      await newStorage.addUser(user);
    } else {
      console.error(
        `A user with ID ${id} was not found. The user was not linked to the Storage.`
      );
    }
  }

  // Agregarle los UserID
  const returnStorage: StorageTS = {
    ...newStorage.dataValues,
    UserId: UserId,
  };

  return returnStorage;
};

// Devolver junto con el id de los usuarios, tando en post como en get. (TANTO CREATE COMO EL GET)

const getAllStorage = async () => {
  // Obtener todos los Storage y sus usuarios asociados
  const storageWithUsers: any = await Storage.findAll({
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });

  const returnStorage = storageWithUsers.map((storage: any) => ({
    id: storage.id,
    name: storage.name,
    disabled: storage.disabled,
    UserId: storage.Users.map((user: UserTS) => user.id),
  }))[0];

  return returnStorage;
};

const updateStorage = async (id: string, name: string, UserId: string[]) => {
  // Traemos el storage
  const currentStorage: any = await Storage.findOne({
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });

  // Extraemos los IDs de los usuarios actuales del Storage
  const userIdsInStorage = currentStorage.Users.map((user: UserTS) => user.id);

  // Validamos si se encontró el almacenamiento
  if (!currentStorage) throw new Error("Storage not found");

  // Obtener todos los usuarios 'UserId'
  const newUsers: any = await User.findAll({
    where: { id: UserId },
  });

  // Verificar si existen todos los usuarios
  for (const user of newUsers) {
    if (!user) throw new Error("User not found");
  }

  // Recorremos 'newUsers' y agregamos los que no esten vinculados
  for (const user of newUsers) {
    // Verificar si el usuario no está vinculado actualmente
    if (!userIdsInStorage.includes(user.id)) {
      await currentStorage.addUser(user);
    }
  }

  // Recorremos 'userIdsInStorage' y verificamos si no existe en la lista de nuevos usuarios
  for (const id of userIdsInStorage) {
    // Verificar si el usuario no existe en la nueva lista de usuarios
    if (!UserId.includes(id)) {
      // Desvincular el usuario de ese Storage
      await currentStorage.removeUser(id);
    }
  }

  // Actualizar el nombre del Storage si es necesario
  if (name) {
    await Storage.update({ name: name }, { where: { id: id } });
  }

  // Creamos el retorno
  const returnStorage = {
    id: currentStorage.id,
    name: name,
    disabled: currentStorage.disabled,
    UserId: UserId,
  };

  return returnStorage;
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
