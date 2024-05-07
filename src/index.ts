import { initData } from "./initData";
import { conn } from "./db";
import app from "./app";
require("./db");

const PORT = process.env.PORT || 3001;

if (process.argv.includes("--load-backup")) {
  // Set init data
  initData();
} else {
  conn.sync({ force: false, alter: true }).then(async () => {
    // Open server
    app.listen(PORT, () => {
      console.log(`Server listening in port ${PORT}`);
    });
  });
}
