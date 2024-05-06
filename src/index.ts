import { initData } from "./initData";
import { conn } from "./db";
import app from "./app";
require("./db");

const PORT = process.env.PORT || 3001;

// Inicialización
conn.sync({ force: true, alter: true }).then(async () => {
  // Set init data
  console.log("Loading init data...");
  await initData();

  // Open server
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
