import { Categories, Movements, Product, Stock, Suppliers } from "../../../db";

const createProduct = async (productData: any) => {
  // Get category
  const category = await Categories.findByPk(productData.CategoryId);
  if (!category) throw new Error("Category not found");

  // Get supplier
  const supplier = await Suppliers.findByPk(productData.SupplierId);
  if (!supplier) throw new Error("Supplier not found");

  // Create new product
  const newProduct: any = await Product.create({
    description: productData.description,
    skuNumber: productData.skuNumber,
    priceBuy: productData.priceBuy,
    priceSale: productData.priceSale,
    amount: productData.amount,
  });

  // Bind category
  await newProduct.setCategory(category);

  // Bind Supplier
  await newProduct.setSupplier(supplier);

  return newProduct;
};

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const updateProducts = async (product: any) => {
  const response = await Product.findOne({
    where: { id: product.id },
  });

  if (response) await response.update(product);
  else throw new Error("Product not found");
};

const deleteProduct = async (productId: string) => {
  // Busca el producto
  const product = await Product.findOne({
    where: { id: productId },
  });
  if (!product) throw new Error("Product not found");

  // Elimina todos los movimientos del producto
  await Movements.destroy({ where: { ProductId: productId } });

  // Elimina todos los stocks del producto
  await Stock.destroy({ where: { ProductId: productId } });

  // Elimina el producto
  await product.destroy();
};

const disableProduct = async (id: string, disabled: boolean) => {
  const product: any = await Product.findOne({
    where: { id: id },
  });
  if (product) {
    product.disabled = disabled;
    await product.save();
  } else {
    throw new Error("Product not found");
  }
};

export {
  createProduct,
  getAllProducts,
  updateProducts,
  deleteProduct,
  disableProduct,
};
