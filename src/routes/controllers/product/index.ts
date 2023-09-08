import { Product } from "../../../db";

const createProduct = async (productData: any) => {
    const newProduct = await Product.create(productData);
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
    else throw new Error("product not found");
  };

  const deleteProduct = async (productId: string) => {
    const product = await Product.findOne({ where: { id: productId } });
  
    if (!product) {
      throw new Error("Product not found");
    }
  
    await product.destroy();
  
    console.log(`Product with ID ${productId} successfully removed.`);
  };

  const disableProduct = async (productId: string) => {
    const product = await Product.findOne({ where: { id: productId } });
  
    if (!product) {
      throw new Error("Product not found");
    }
    await product.update({ disabled: true });
  
    console.log(`Product with ID ${productId} successfully disabled.`);
  };

  export {createProduct, getAllProducts, updateProducts, deleteProduct, disableProduct}