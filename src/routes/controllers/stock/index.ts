import {Stock, Product, Storage} from "../../../db";

const createStock = async (quantity: number, ProductId: string, StorageId: string) => {
    const newStock: any = await Stock.create({
      quantity,
    });
    if (ProductId) {
      const product = await Product.findByPk(ProductId);
      if (product) {
        await newStock.setProduct(product);
      }
    }
    if (StorageId) {
      const storage = await Storage.findByPk(StorageId);
      if (storage) {
        await newStock.setStorage(storage);
      }
    }
    return newStock;
  };

  const updateStock = async (stockId: string, quantityToAdd: number) => {
    const stock: any = await Stock.findByPk(stockId);
    if (!stock) {
      throw new Error(`Stock with ID ${stockId} was not found.`);
    }
    const currentQuantity = stock.quantity;
    const newQuantity = currentQuantity + quantityToAdd;
    await stock.update({ quantity: newQuantity });
    return stock;
  };
  
  const updateStockSubtract = async (stockId: string, quantityToSubtract: number) => {
    const stock: any = await Stock.findByPk(stockId);
    if (!stock) {
      throw new Error(`El stock con ID ${stockId} no se encontró.`);
    }
    const currentQuantity = stock.quantity;
    if (quantityToSubtract > currentQuantity) {
      throw new Error(`La cantidad a restar es mayor que la cantidad actual en el stock.`);
    }
    const newQuantity = currentQuantity - quantityToSubtract;
    await stock.update({ quantity: newQuantity });
    return stock;
  };
  

  export {createStock, updateStock, updateStockSubtract};