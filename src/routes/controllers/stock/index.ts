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
    ProductId,
    { ingress: newStock.dataValues.id },
    { ingress: StorageId },
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
  quantity: number,
  ProductId: string,
  Storage: {
    egress: string;
    ingress: string;
  },
  userId: string
) => {
  // Check parameters
  if (!ProductId) throw new Error("missing parameter: ProductId");
  if (!quantity) throw new Error("missing parameter: quantity");

  // Get the stock, add the amount and save
  const stock: any = await Stock.findOne({ where: { ProductId } });
  if (!stock) {
    console.log("Creando nuevo:", quantity, ProductId, Storage.ingress, userId);
    return createStock(quantity, ProductId, Storage.ingress, userId);
  }
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
    stock.dataValues.ProductId,
    { ingress: stock.dataValues.id },
    { ingress: stock.dataValues.StorageId },
    userId
  );

  // Return the updated stock and the new movement
  return {
    Stock: stock,
    Product: product,
    Movement: movement,
  };
};

const setEgress = async (
  Stocks: { egress: string; ingress: string },
  quantity: number,
  userId: string
) => {
  // Check parameters
  if (!Stocks.egress) throw new Error("missing parameter: StockId");
  if (!quantity) throw new Error("missing parameter: quantity");

  // Get the tock, check quantity and subtract the amount
  const stock: any = await Stock.findByPk(Stocks.egress);
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
    stock.dataValues.ProductId,
    { egress: Stocks.egress },
    { egress: stock.dataValues.StorageId },
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
  Stocks: { egress: string; ingress: string },
  Storage: {
    egress: string;
    ingress: string;
  },
  userId: string
) => {
  // Check parameters
  if (!date) throw new Error("missing parameter: date");
  if (!new Date(date)?.getTime()) throw new Error("invalid date");

  if (!Stocks.egress) throw new Error("missing parameter: egress stock");
  if (Stocks.egress === Stocks.ingress)
    throw new Error("the storvges cannot be the same");

  if (!Storage.egress) throw new Error("missing parameter: egress storage");
  if (!Storage.ingress) throw new Error("missing parameter: ingress storage");
  if (Storage.egress === Storage.ingress)
    throw new Error("the storvges cannot be the same");

  console.log("------------------------Controlador-----------------------");
  console.log("Controlador", Storage);

  // Get the esgress Storage
  const egressStock: any = await Stock.findByPk(Stocks.egress);

  // Check if Storage exist, and is enough quantity in stock
  if (!egressStock) throw new Error("Egress stock not found");
  if (Number(egressStock.quantity) < Number(quantity))
    throw new Error("Insufficient stock");

  // Get the esgress Storage
  let ingressStock: any = await Stock.findOne({
    where: {
      StorageId: Storage.ingress,
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
      StorageId: Storage.ingress,
      ProductId: egressStock.ProductId,
      quantity: Number(quantity),
    });
  }

  // Subtract the quantity and save
  egressStock.quantity = Number(egressStock.quantity) - Number(quantity);
  await egressStock.save();

  // Create the transfer movement
  const transferMovement = await setMovements(
    new Date(date),
    MovementType.TRANFER,
    Number(quantity),
    egressStock.ProductId,
    {
      ingress: ingressStock.id,
      egress: egressStock.id,
    },
    {
      ingress: Storage.egress,
      egress: Storage.ingress,
    },
    userId
  );

  // Return the Stocks and movements
  return {
    Stocks: {
      egress: egressStock,
      ingress: ingressStock,
    },
    Movement: transferMovement,
  };
};

export { createStock, getStock, setIngress, setEgress, setTransfer };
