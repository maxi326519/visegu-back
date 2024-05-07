import { ProductTS } from "../interfaces/ProductTS";
import {
  Categories,
  conn,
  Customers,
  Locations,
  Product,
  Services,
  States,
  Storage,
  User,
} from "../db";
import readline from "readline";

import customers from "./customers";
import services from "./services";
import locations from "./locations";
import categories from "./categories";
import storages from "./storages";
import products from "./products";
import states from "./states";

const bcrypt = require("bcrypt");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function initData() {
  rl.question(
    "Are you sure you want to run this function? This will delete the database and load backup (yes/no): ",
    async (answer: string) => {
      if (answer.toLowerCase() === "yes") {
        await loadData()
          .then(() => {
            console.log("Data loaded successfully!");
            rl.close();
          })
          .catch((error) => {
            console.error("Error al cargar datos iniciales:", error);
            rl.close();
          });
      } else {
        console.log("Initialization aborted by the user");
        rl.close();
      }
    }
  );
}

async function loadData(): Promise<void> {
  console.log("Creating tables...");
  await conn.sync({ force: true });

  console.log("Loading init data...");

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
