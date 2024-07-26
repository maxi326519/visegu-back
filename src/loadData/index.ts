import { ProductTS } from "../interfaces/ProductTS";
import {
  Categories,
  conn,
  Customers,
  Parts,
  Product,
  Services,
  States,
  Storage,
  User,
} from "../db";

import customers from "./customers";
import services from "./services";
import categories from "./categories";
import storages from "./storages";
import products from "./products";
import states from "./states";
import parts from "./parts";

const bcrypt = require("bcrypt");

export async function loadData(): Promise<void> {
  console.log("Loading init data...");
  await conn.sync({ force: false });
  let counter = 0;

  // Create the customers
  for (const customer of customers) {
    await Customers.create({ ...customers });
    console.log(counter);
    counter++;
  }

  // Create the services
  for (const service of services) {
    await Services.create(service);
    console.log(counter);
    counter++;
  }

  // Create the categories
  for (const category of categories) {
    await Categories.create({ ...category });
    console.log(counter);
    counter++;
  }

  // Create the storages
  for (const storage of storages) {
    await Storage.create({ ...storage });
    console.log(counter);
    counter++;
  }

  // Create the states
  for (const state of states) {
    await States.create({ name: state });
    console.log(counter);
    counter++;
  }

  // Create the parts
  for (const part of parts) {
    await Parts.create({ name: part });
    console.log(counter);
    counter++;
  }

  // Create the products
  for (const product of products) {
    // Create product object
    const newProduct: ProductTS = {
      description: product.description,
      skuNumber: product.skuNumber,
      amount: 0,
      priceBuy: 0,
      priceSale: 0,
      disabled: false,
    };

    // Create product
    const productDB: any = await Product.create(newProduct as any);

    // Get the product category and conect to product
    let categoryDB = await Categories.findOne({
      where: { name: product.category },
    });
    if (!categoryDB) {
      categoryDB = await Categories.create({ name: product.category });
    } else {
      productDB.setCategory(categoryDB);
    }
    console.log(counter);
    counter++;
  }

  // Get any Admin
  const adminUser = await User.findOne({ where: { rol: "ADMIN" } });

  // If admin dont exist create it
  if (!adminUser) {
    // User admin data
    const user = {
      name: "ADMIN",
      rol: "ADMIN",
      email: "admin@gmail.com",
      password: await bcrypt.hash("321654987", 10),
    };

    // Create user
    await User.create(user).catch((error) => console.log(error));
  }
}
