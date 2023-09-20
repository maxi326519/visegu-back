import { Stock, Product, Storage } from "../../../db";
import { MovementsType } from "../../../interfaces/MovementsTS";
import { setMovements } from "../../controllers/movements";

const createStock = async (
  quantity: number,
  ProductId: string,
  StorageId: string
) => {
  if (!ProductId) throw new Error("missing parameter ProductId");
  if (!StorageId) throw new Error("missing parameter StorageId");

  // Crear un nuevo registro de stock
  const newStock: any = await Stock.create({
    quantity,
  });

  // Asociar con un producto (si se proporciona ProductId)
  if (ProductId) {
    const product = await Product.findByPk(ProductId);
    if (product) {
      await newStock.setProduct(product);
    }
  }

  // Asociar con un almacén (si se proporciona StorageId)
  if (StorageId) {
    const storage = await Storage.findByPk(StorageId);
    if (storage) {
      await newStock.setStorage(storage);
    }
  }

  // Registrar movimientos y obtener el registro de movimientos asociado
  const movementsRecord = await setMovements(
    new Date(),
    MovementsType.entrada,
    quantity,
    newStock.dataValues.id,
    StorageId,
    ProductId
  );

  // Devolver tanto el nuevo registro de stock como el registro de movimientos
  return {
    newStock,
    movementsRecord,
  };
};

const updateAddStock = async (id: string, quantity: number) => {
  // Obtener el registro de stock y sus asociaciones
  const stock: any = await Stock.findOne({
    where: { id },
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
      {
        model: Storage,
        attributes: ["id"],
      },
    ],
  });

  // Verificar si el registro de stock existe
  if (!stock) throw new Error(`Stock not found`);

  // Obtener la cantidad actual y calcular la nueva cantidad
  const currentQuantity = stock.quantity;
  const newQuantity = currentQuantity + quantity;

  // Actualizar la cantidad de stock
  await stock.update({ quantity: newQuantity });

  // Crear el registro de movimientos y obtenerlo
  const movementsRecord = await setMovements(
    new Date(),
    MovementsType.entrada,
    quantity,
    stock.dataValues.id,
    stock.dataValues.Storage,
    stock.dataValues.Product
  );

  // Devolver tanto el registro de stock actualizado como el registro de movimientos
  return {
    updatedStock: stock,
    movementsRecord: movementsRecord,
  };
};

const updateStockSubtract = async (stockId: string, quantity: number) => {
  const stock: any = await Stock.findByPk(stockId);

  if (!stock) throw new Error("Stock not found");

  // Verificar si la cantidad a restar es mayor que la cantidad actual
  const currentQuantity = stock.quantity;
  if (quantity > currentQuantity) {
    throw new Error(
      `The quantity to be subtracted is greater than the current quantity in stock.`
    );
  }

  // Calcular la nueva cantidad
  const newQuantity = currentQuantity - quantity;

  // Actualizar la cantidad de stock
  await stock.update({ quantity: newQuantity });

  // Crear el registro de movimientos y obtenerlo
  const movementsRecord = await setMovements(
    new Date(),
    MovementsType.entrada,
    quantity,
    stock.dataValues.id,
    stock.dataValues.StorageId,
    stock.dataValues.ProductId
  );

  // Devolver tanto el registro de stock actualizado como el registro de movimientos
  return {
    updatedStock: stock,
    movementsRecord: movementsRecord,
  };
};

export function setTransfer(
  date: string,
  ProductId: string,
  quantity: number,
  StorageId: {
    egress: string; // ID de storage de donde sale
    ingress: string; // ID de storage de donde llega
  }
) {
  // Traer el Stock del Storage de egreso

  // Traer el Stock del Storage de ingreso

  // Verificar si existe el Stock del Storage de ingreso
  // Si no crearlo

  // Restarle la cantidad al Stock del Storage de egreso (Update)

  // Crear un movimiento de salida

  // Sumarle la cantidad al Stock del Storage de ingreso (Update)

  // Crear un movimiento de entrada

  // Retornar los Stock, y los movimientos
  return {
    Stocks: [],
    Movements: [],
  };
}

export { createStock, updateAddStock, updateStockSubtract };
