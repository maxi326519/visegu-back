import { Model, ModelCtor } from "sequelize";
import {
  ChassisOwwnerOrLessor,
  Equipments,
  Locations,
  Parts,
  RepairItem,
  States,
} from "../../../db";

// Definiendo el tipo para el objeto lists
interface Lists {
  [key: string]: ModelCtor<Model<any, any>>;
}

const lists: Lists = {
  locations: Locations,
  equipment: Equipments,
  parts: Parts,
  state: States,
  repairItem: RepairItem,
  chassisOwwnerOrLessor: ChassisOwwnerOrLessor,
};

// Añadir valores a la tabla
const setList = async (name: string, values: string[]): Promise<void> => {
  // Get table
  const table = lists[name];
  if (!table) throw new Error("Table not found");

  // Save list data
  for (const value of values) {
    await table.create({ name: value });
  }
};

const getList = async () => {
  // Variable to save tables data
  const result: { [key: string]: any[] } = {};

  // Get tables
  for (const [key, table] of Object.entries(lists)) {
    const records = await table.findAll();
    const data = records.map((record) => {
      // Clonamos dataValues para no modificar el objeto original
      const item = { ...record.get({ plain: true }) };
      return item.name;
    });
    result[key] = data;
  }

  // Return lists
  return result;
};

const deleteList = async (name: string, values: string[]): Promise<void> => {
  // Get table
  const table = lists[name];
  if (!table) throw new Error("Table not found");

  // Delete values
  for (const value of values) {
    await table.destroy({
      where: { name: value },
    });
  }
};

export { setList, getList, deleteList };
