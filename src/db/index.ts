require("dotenv").config();
import { Sequelize, DataTypes } from "sequelize";
import path from "path";
import fs from "fs";

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
  Movements,
  Product,
  Stock,
  Storage,
  User,
  WorkReport,
  WorkReportsDetails,
  InspectionReport,
  Clients,
  Suppliers,
  LaborServices,
  InspectionDetail,
} = sequelize.models;

Categories.hasMany(Product);
Suppliers.hasMany(Product);

Product.belongsTo(Categories);
Product.belongsTo(Suppliers);
Product.hasMany(Stock);
Product.hasMany(Movements);

Stock.belongsTo(Storage);
Stock.belongsTo(Product);

Storage.hasMany(Stock);

User.hasMany(Movements);
User.hasMany(WorkReport);
User.hasMany(InspectionReport);

Movements.belongsTo(User);
Movements.belongsTo(Product);

Movements.belongsTo(Stock, {
  foreignKey: "StockIngressId",
  as: "sourceStockIngress",
});

Movements.belongsTo(Stock, {
  foreignKey: "StockEgressId",
  as: "StockEgress",
});

Movements.belongsTo(Storage, {
  foreignKey: "StorageIngressId",
  as: "StorageIngress",
});

Movements.belongsTo(Storage, {
  foreignKey: "StorageEgressId",
  as: "StorageEgress",
});

WorkReport.belongsTo(User);
WorkReport.hasMany(WorkReportsDetails);
WorkReportsDetails.belongsTo(WorkReport);

InspectionReport.belongsTo(User);

InspectionReport.hasMany(InspectionDetail);
InspectionDetail.belongsTo(InspectionReport);

export const conn = sequelize;
export const models = sequelize.models;
