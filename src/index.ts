import { conn } from "./db";
const app = require("./app");
require("./db");


const PORT = process.env.PORT || 3001;

// Initialisation
conn.sync({ force: true }).then(async () => {
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
