import { Movements, Stock, Product, User } from "../../../db";
import { MovementType } from "../../../interfaces/MovementsTS";

const setMovements = async (
  date: Date,
  type: MovementType,
  quantity: number,
  ProductId: string,
  Stocks: {
    egress: string;
    ingress: string;
  },
  Storage: {
    egress: string;
    ingress: string;
  },
  UserId?: string
) => {
  if (!date) {
    throw new Error('The "date" parameter is required.');
  }

  let newMovement: any = {
    date,
    type,
    quantity,
  };

  // Add Stocks
  if (Stocks.egress) newMovement.StockEgress = Stocks.egress;
  if (Stocks.ingress) newMovement.StockIngress = Stocks.ingress;

  // Add storages
  if (Storage.egress) newMovement.StorageEgress = Storage.egress;
  if (Storage.ingress) newMovement.StorageIngress = Storage.ingress;

  // Create movement
  const newMovements: any = await Movements.create();

  // Add product
  if (ProductId) {
    const product = await Product.findByPk(ProductId);
    if (product) {
      await newMovements.setProduct(product);
    }
  }

  // Add User
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
  // Get movement
  const movement = await Movements.findByPk(movementId);
  if (!movement) throw new Error("Movement not found");

  // Get Stocks
  if (movement.dataValues.StockEgress) {
    const stockEgress = await Stock.findByPk(movement.dataValues.StockEgress);
    if (!stockEgress) throw new Error("Egress stock not found");
    stockEgress.dataValues.quantity -= movement.dataValues.quantity;
  }

  if (movement.dataValues.StockIngress) {
    const stockIngress = await Stock.findByPk(movement.dataValues.StockIngress);
    if (!stockIngress) throw new Error("Ingress stock not found");
  }

  // Get Product
  const product = await Product.findByPk(movement?.dataValues.ProductId);
  if (!product) throw new Error("Product not found");

  //------------------------------------------------
/* 
  // Quantity variables
  let stockQuantity = stock.dataValues.quantity;
  let productQuantity = product.dataValues.amount;

  // Update quantity
  if (movement.dataValues.type === MovementType.INGRESS) {

  } else if (movement.dataValues.type === MovementType.EGRESS) {
    stockQuantity += movement.dataValues.quantity;
    productQuantity += movement.dataValues.quantity;
  }

  // Update stock and product
  await stock.update({ quantity: stockQuantity });
  await product.update({ amount: productQuantity }); */

  // Delete movement
  await movement.destroy();
};

export { setMovements, getMovements, deleteMovements };
