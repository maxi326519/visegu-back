import { Stock, Product, Storage } from "../../../db";
import { MovementType } from "../../../interfaces/MovementsTS";
import { setMovements } from "../../controllers/movements";

const createStock = async (
  quantity: number,
  ProductId: string,
  StorageId: string,
  userId: string
) => {
  // Check parameters
  if (!quantity) throw new Error("missing parameter: quantity");
  if (!ProductId) throw new Error("missing parameter: ProductId");
  if (!StorageId) throw new Error("missing parameter: StorageId");

  // Create a new stock register
  const newStock: any = await Stock.create({ quantity: Number(quantity) });

  // Bind the new stock with the product
  const product = await Product.findByPk(ProductId);
  if (!product) throw new Error("Product not found");
  await newStock.setProduct(product);

  // Bind the new stock with the storage
  const storage = await Storage.findByPk(StorageId);
  if (!storage) throw new Error("Storage not found");
  await newStock.setStorage(storage);

  // Update product amount
  await product.update({ amount: quantity });

  // Create the movement
  const newMovement = await setMovements(
    new Date(),
    MovementType.INGRESS,
    quantity,
    newStock.dataValues.id,
    StorageId,
    ProductId,
    userId
  );

  // Return the new Stock and Movement
  return {
    Stock: newStock,
    Product: product,
    Movement: newMovement,
  };
};

const getStock = () => {
  const response = Stock.findAll();
  return response;
};

const setIngress = async (
  StockId: string,
  quantity: number,
  userId: string
) => {
  // Check parameters
  if (!StockId) throw new Error("missing parameter: StockId");
  if (!quantity) throw new Error("missing parameter: quantity");

  // Get the tock, add the amount and save
  const stock: any = await Stock.findByPk(StockId);
  if (!stock) throw new Error(`Stock not found`);
  stock.quantity = Number(stock.quantity) + Number(quantity);
  await stock.save();

  // Get and update product amount
  const product: any = await Product.findOne({
    where: { id: stock.dataValues.ProductId },
  });
  if (!product) throw new Error("Product not found");
  product.amount = Number(product.amount) + Number(quantity);
  await product.save();

  // Create the movement
  const movement = await setMovements(
    new Date(),
    MovementType.INGRESS,
    quantity,
    stock.dataValues.id,
    stock.dataValues.StorageId,
    stock.dataValues.ProductId,
    userId
  );

  // Return the updated stock and the new movement
  return {
    Stock: stock,
    Product: product,
    Movement: movement,
  };
};

const setEgress = async (StockId: string, quantity: number, userId: string) => {
  // Check parameters
  if (!StockId) throw new Error("missing parameter: StockId");
  if (!quantity) throw new Error("missing parameter: quantity");

  // Get the tock, check quantity and subtract the amount
  const stock: any = await Stock.findByPk(StockId);
  if (!stock) throw new Error(`Stock not found`);
  if (stock.quantity < Number(quantity)) throw new Error("Insufficient Stock");
  stock.quantity = Number(stock.quantity) - Number(quantity);
  await stock.save();

  // Get and update product amount
  const product: any = await Product.findOne({
    where: { id: stock.dataValues.ProductId },
  });
  if (!product) throw new Error("Product not found");
  product.amount = Number(product.amount) - Number(quantity);
  await product.save();

  // Create the ingress movement
  const movement = await setMovements(
    new Date(),
    MovementType.EGRESS,
    quantity,
    stock.dataValues.id,
    stock.dataValues.StorageId,
    stock.dataValues.ProductId,
    userId
  );

  // Return the updated stock and the new movement
  return {
    Stock: stock,
    Product: product,
    Movement: movement,
  };
};

const setTransfer = async (
  date: string,
  quantity: number,
  StockId: string,
  StorageId: {
    egress: string;
    ingress: string;
  },
  userId: string
) => {
  // Check parameters
  if (!date) throw new Error("missing parameter: date");
  if (!new Date(date)?.getTime()) throw new Error("invalid date");
  if (!StorageId.egress) throw new Error("missing parameter: ingress storage");
  if (!StorageId.ingress) throw new Error("missing parameter: egress storage");
  if (StorageId.egress === StorageId.ingress)
    throw new Error("the storages cannot be the same");

  // Get the esgress Storage
  const egressStock: any = await Stock.findByPk(StockId);

  // Check if Storage exist, and is enough quantity in stock
  if (!egressStock) throw new Error("Egress stock not found");
  if (Number(egressStock.quantity) < Number(quantity))
    throw new Error("Insufficient stock");

  // Get the esgress Storage
  let ingressStock: any = await Stock.findOne({
    where: {
      StorageId: StorageId.ingress,
      ProductId: egressStock.ProductId,
    },
  });

  // Check if the stock in this storage already exist
  if (ingressStock) {
    // Add new amounts
    ingressStock.quantity = Number(ingressStock.quantity) + Number(quantity);
    await ingressStock.save();
  } else {
    // Else create it
    ingressStock = await Stock.create({
      StorageId: StorageId.ingress,
      ProductId: egressStock.ProductId,
      quantity: Number(quantity),
    });
  }

  // Subtract the quantity and save
  egressStock.quantity = Number(egressStock.quantity) - Number(quantity);
  await egressStock.save();

  // Create the egress movement
  const egressMovement = await setMovements(
    new Date(date),
    MovementType.EGRESS,
    Number(quantity),
    egressStock.id,
    StorageId.egress,
    egressStock.ProductId,
    userId
  );

  // Create the ingress movement
  const ingressMovement = await setMovements(
    new Date(date),
    MovementType.INGRESS,
    Number(quantity),
    ingressStock.id,
    StorageId.ingress,
    egressStock.ProductId,
    userId
  );

  // Return the Stocks and movements
  return {
    Stocks: {
      egress: egressStock,
      ingress: ingressStock,
    },
    Movements: {
      egress: egressMovement,
      ingress: ingressMovement,
    },
  };
};

export { createStock, getStock, setIngress, setEgress, setTransfer };
