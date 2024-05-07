import { ProductTS } from "../interfaces/ProductTS";
import {
  Categories,
  Customers,
  Locations,
  Product,
  Services,
  States,
  Storage,
  User,
} from "../db";

import customers from "./customers";
import services from "./services";
import locations from "./locations";
import categories from "./categories";
import storages from "./storages";
import products from "./products";
import states from "./states";

const bcrypt = require("bcrypt");

export async function initData() {
  // Create the customers
  for (const customer of customers) {
    await Customers.create(customer);
  }

  // Create the services
  for (const service of services) {
    await Services.create(service);
  }

  // Create the locations
  for (const location of locations) {
    await Locations.create(location);
  }

  // Create the categories
  for (const category of categories) {
    await Categories.create(category);
  }

  // Create the storages
  for (const storage of storages) {
    await Storage.create(storage);
  }

  // Create the states
  for (const state of states) {
    await States.create({ name: state });
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
