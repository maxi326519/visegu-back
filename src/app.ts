import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// Import Routes
import user from "./routes/users";
import products from "./routes/products";
import categories from "./routes/categories";
import storage from "./routes/storage";

// Ceate app
const app = express();

// Cors options
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET, PATCH, POST, OPTIONS, PUT, DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};

// app config
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));

// Use routes
app.use("/users", user);
app.use("/products", products)
app.use("/categories", categories)
app.use("/storages", storage)

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
