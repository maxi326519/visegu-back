import { Stock, Product, Storage } from "../../../db";
import { MovementsType } from "../../../interfaces/MovementsTS";
import { setMovements } from "../../controllers/movements";

const createStock = async (
  quantity: number,
  ProductId: string,
  StorageId: string,
  userId: string
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
    ProductId,
    userId
  );

  // Devolver tanto el nuevo registro de stock como el registro de movimientos
  return {
    newStock,
    movementsRecord,
  };
};

const updateAddStock = async (id: string, quantity: number, userId: string) => {
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
    stock.dataValues.Product,
    userId
  );

  // Devolver tanto el registro de stock actualizado como el registro de movimientos
  return {
    updatedStock: stock,
    movementsRecord: movementsRecord,
  };
};

const updateStockSubtract = async (stockId: string, quantity: number, userId: string) => {
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
    stock.dataValues.ProductId,
    userId
  );

  // Devolver tanto el registro de stock actualizado como el registro de movimientos
  return {
    updatedStock: stock,
    movementsRecord: movementsRecord,
  };
};

const setTransfer = async (
  date: string,
  ProductId: string,
  quantity: number,
  StorageId: {
  egress: string;
  ingress: string;
  },
  userId: string,
) => {
console.log(StorageId);
  // Convierte la cadena de fecha a un objeto Date
  const transferDate = new Date(date);

  // Traer el Stock del Storage de egreso
  const egressStock: any = await Stock.findOne({
    where: {
      StorageId: StorageId.egress,
      ProductId: ProductId,
    },
  });

  // Verificar si hay suficiente cantidad en el Stock del Storage de egreso
  if (!egressStock || egressStock.quantity < quantity) {
    throw new Error("There is not enough quantity in the Egress Storage Stock.");
  }
 console.log(egressStock);
  // Traer el Stock del Storage de ingreso
  const ingressStock: any = await Stock.findOne({
    where: {
      StorageId: StorageId.ingress,
      ProductId: ProductId,
    },
  });
  console.log(ingressStock);
  // Verificar si existe el Stock del Storage de ingreso
  // Si no existe, crearlo
  if (!ingressStock) {
      await Stock.create({
      StorageId: StorageId.ingress,
      ProductId: ProductId,
      quantity: quantity,
    });
  }

  // Restarle la cantidad al Stock del Storage de egreso (Update)
  const newEgressQuantity = egressStock.quantity - quantity;
  await egressStock.update({ quantity: newEgressQuantity });

  // Crear un movimiento de salida
  const egressMovement = await setMovements(
    transferDate,
    MovementsType.salida,
    quantity,
    egressStock.id,
    StorageId.egress,
    ProductId,
    userId,
  );

  // Sumarle la cantidad al Stock del Storage de ingreso (Update)
  const newIngressQuantity = ingressStock ? Number(ingressStock.quantity) + Number(quantity) : quantity;
  if (ingressStock) {
    await ingressStock.update({ quantity: newIngressQuantity });
  }

  // Crear un movimiento de entrada
  const ingressMovement = await setMovements(
    transferDate,
    MovementsType.entrada,
    quantity,
    ingressStock.id,
    StorageId.ingress,
    ProductId,
    userId
  );

  // Retornar los Stocks y los movimientos
  return {
    Stocks: [egressStock, ingressStock],
    Movements: [egressMovement, ingressMovement],
  };
};


export { createStock, updateAddStock, updateStockSubtract, setTransfer };
