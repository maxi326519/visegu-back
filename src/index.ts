import { User, conn } from "./db";
import app from "./app";
import { initData } from "./initData";
require("./db");

const PORT = process.env.PORT || 3001;

// Inicialización
conn.sync({ force: true, alter: true }).then(async () => {
  // Set init data
  initData();

  // Open server
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
