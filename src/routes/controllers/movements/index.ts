import { Movements, Stock, Storage, Product, User } from "../../../db";

const setMovements = async (
  date: string,
  type: string,
  quantity: number,
  StockId: string,
  StorageId: string,
  ProductId: string,
  UserId?: string
) => {
  if (!date) {
    throw new Error('El parámetro "date" es requerido.');
  }
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error('El formato de la fecha proporcionada es inválido.');
  }
  const newMovements: any = await Movements.create({
    date: parsedDate,
    type,
    quantity,
    StockId,
    StorageId,
    ProductId,
    UserId,
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

export {setMovements};