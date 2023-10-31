import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// Import Routes
import user from "./routes/users";
import products from "./routes/products";
import categories from "./routes/categories";
import storage from "./routes/storage";
import stock from "./routes/stock";
import movements from "./routes/movements";
import login from "./routes/login";
import { verificarToken } from "./routes/controllers/verificacion";

// Ceate app
const app = express();

// Cors options
const corsOptions = {
  origin: "*",
  credentials: true,
  methods: "GET, PATCH, POST, OPTIONS, PUT, DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, authorization",
};

// app config
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));

// Use routes
app.use("/login", login);
app.use("/users", verificarToken, user);
app.use("/products", verificarToken, products);
app.use("/categories", verificarToken, categories);
app.use("/storages", verificarToken, storage);
app.use("/stock", verificarToken, stock);
app.use("/movements", verificarToken, movements);

// Implementar un protocolo de HTTPS de Security
// Error catching endware.
app.use((err: any, req: any, res: any, next: any) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
