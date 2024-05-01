import { User, conn } from "./db";
import app from "./app";
const bcrypt = require("bcrypt");
require("./db");

const PORT = process.env.PORT || 3001;

// Inicialización
conn.sync({ force: true, alter: true }).then(async () => {
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

  // Open server
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
