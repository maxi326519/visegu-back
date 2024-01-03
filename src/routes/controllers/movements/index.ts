import { Movements, Stock, Product, User } from "../../../db";
import { MovementType } from "../../../interfaces/MovementsTS";

const setMovements = async (
  date: Date,
  type: MovementType,
  quantity: number,
  ProductId: string,
  Stocks: {
    egress?: string;
    ingress?: string;
  },
  Storage: {
    egress?: string;
    ingress?: string;
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

  console.log("------------------------Transfer-----------------------");
  console.log("- Stocks -", Stocks);
  console.log("- Storage -", Storage);

  // Add Stocks
  if (Stocks.egress) newMovement.StockEgressId = Stocks.egress;
  if (Stocks.ingress) newMovement.StockIngressId = Stocks.ingress;

  // Add storages
  if (Storage.egress) newMovement.StorageEgressId = Storage.egress;
  if (Storage.ingress) newMovement.StorageIngressId = Storage.ingress;

  // Create movement
  const newMovements: any = await Movements.create(newMovement);

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

  // Get Stocks and substract
  // ---- If 'type' is ingress
  if (movement.dataValues.type === MovementType.INGRESS) {
    const stockIngress = await Stock.findByPk(
      movement.dataValues.StockIngressId
    );
    if (!stockIngress) throw new Error("Ingress stock not found");
    const newStockIngress =
      stockIngress.dataValues.quantity - movement.dataValues.quantity;
    await stockIngress.update({ quantity: newStockIngress });
  }

  // ---- If 'type' is egress
  if (movement.dataValues.type === MovementType.EGRESS) {
    const stockEgress = await Stock.findByPk(movement.dataValues.StockEgressId);
    if (!stockEgress) throw new Error("Egress stock not found");
    const newStockEgress =
      stockEgress.dataValues.quantity + movement.dataValues.quantity;
    await stockEgress.update({ quantity: newStockEgress });
  }

  // ---- If 'type' is transfer
  if (movement.dataValues.type === MovementType.TRANFER) {
    console.log(movement);

    // Ingress
    const stockIngress = await Stock.findByPk(
      movement.dataValues.StockIngressId
    );
    if (!stockIngress) throw new Error("Ingress stock not found");

    // Egress
    const stockEgress = await Stock.findByPk(movement.dataValues.StockEgressId);
    if (!stockEgress) throw new Error("Egress stock not found");

    const newStockIngress =
      stockIngress.dataValues.quantity - movement.dataValues.quantity;
    const newStockEgress =
      stockEgress.dataValues.quantity + movement.dataValues.quantity;

    await stockIngress.update({ quantity: newStockIngress });
    await stockEgress.update({ quantity: newStockEgress });
  }

  // Get Product and update
  const product = await Product.findByPk(movement?.dataValues.ProductId);
  if (!product) throw new Error("Product not found");

  // Quantity variables
  let productQuantity = product.dataValues.amount;

  // Update quantity
  if (movement.dataValues.type === MovementType.INGRESS) {
    productQuantity -= movement.dataValues.quantity;
  } else if (movement.dataValues.type === MovementType.EGRESS) {
    productQuantity += movement.dataValues.quantity;
  }

  // Update stock and product
  await product.update({ amount: productQuantity });

  // Delete movement
  await movement.destroy();
};

export { setMovements, getMovements, deleteMovements };
