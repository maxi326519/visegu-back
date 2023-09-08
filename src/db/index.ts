require("dotenv").config();
import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const options: any = {
  dialect: "mariadb",
  host: DB_HOST,
  post: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: false,
  native: false,
  dialectOptions: {
    allowPublicKeyRetrieval: true,
  },
};

const sequelize = new Sequelize(options);

const basename = path.basename(__filename);

// Leer todos los archivos de la carpeta models y agregarlos al arreglo modelDefiners
const modelDefiners: Array<(sequelize: any, DataTypes: any) => void> = [];
fs.readdirSync(__dirname + "/models")
  /*   .map((file) => {
    console.log("File:", file);
    return file;
  }) */
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      (file.slice(-3) === ".ts" || file.slice(-3) === ".js")
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname + "/models", file)).model;
    modelDefiners.push(modelDefiner);
  });

// Agregar todos los modelos definidos al objeto sequelize.models
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, DataTypes);
}

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
export const {
  Categories,
  History,
  Product,
  Stock,
  Storage,
  User,
} = sequelize.models;

Categories.hasMany(Product);

Product.belongsTo(Categories);
Product.hasMany(Stock);

Stock.belongsTo(Storage);
Stock.belongsTo(Product);
Stock.hasMany(History);

Storage.hasMany(Stock);
Storage.belongsToMany(User, { through: "StorageUser" });
Storage.hasMany(History);

User.belongsToMany(Storage, { through: "StorageUser" });
User.hasMany(History);

History.belongsTo(User);
History.belongsTo(Storage);
History.belongsTo(Stock);

export const conn = sequelize;
export const models = sequelize.models;
