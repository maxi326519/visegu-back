import { Movements, Stock, Storage, Product, User } from "../../../db";

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
}

export { setMovements, getMovements };
