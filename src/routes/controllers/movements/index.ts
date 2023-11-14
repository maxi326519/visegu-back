import { Movements, Stock, Storage, Product, User } from "../../../db";
import { MovementType } from "../../../interfaces/MovementsTS";

const setMovements = async (
  date: Date,
  type: string,
  quantity: number,
  StockId: string,
  StorageId: string,
  ProductId: string,
  UserId?: string
) => {
  if (!date) {
    throw new Error('The "date" parameter is required.');
  }

  const newMovements: any = await Movements.create({
    date,
    type,
    quantity,
  });

  if (StockId) {
    const stock = await Stock.findByPk(StockId);
    if (stock) {
      await newMovements.setStock(stock);
    }
  }
  if (StorageId) {
    const storage = await Storage.findByPk(StorageId);
    if (storage) {
      await newMovements.setStorage(storage);
    }
  }
  if (ProductId) {
    const product = await Product.findByPk(ProductId);
    if (product) {
      await newMovements.setProduct(product);
    }
  }
  if (UserId) {
    const user = await User.findByPk(UserId);
    if (user) {
      await newMovements.setUser(user);
    }
  }
  return newMovements;
};

const getMovements = async () => {
  // Verify parameters and add the filters

  // Get movements
  const movements = Movements.findAll();

  // Return all Movements
  return movements;
};

const deleteMovements = async (movementId: string) => {
  // Get movements
  const movement = await Movements.findByPk(movementId);
  if (!movement) throw new Error("Movement not found");

  // Get Stock
  const stock = await Stock.findByPk(movement?.dataValues.StockId);
  if (!stock) throw new Error("Stock not found");

  // Get Product
  const product = await Product.findByPk(movement?.dataValues.ProductId);
  if (!product) throw new Error("Product not found");

  // Quantity variables
  let stockQuantity = stock.dataValues.quantity;
  let productQuantity = product.dataValues.amount;

  // Update quantity
  if (movement.dataValues.type === MovementType.INGRESS) {
    stockQuantity -= movement.dataValues.quantity;
    productQuantity -= movement.dataValues.quantity;
  } else if (movement.dataValues.type === MovementType.EGRESS) {
    stockQuantity += movement.dataValues.quantity;
    productQuantity += movement.dataValues.quantity;
  }

  // Update stock and product
  await stock.update({ quantity: stockQuantity });
  await product.update({ amount: productQuantity });

  // Delete movement
  await movement.destroy();
};

export { setMovements, getMovements, deleteMovements };
