import { User, conn } from "./db";
const bcrypt = require("bcrypt");
const app = require("./app");
require("./db");

const PORT = process.env.PORT || 3001;

// Inicialización
conn.sync({ force: false }).then(async () => {
// First user
  const user = {
    name: "ADMIN",
    password: "321654",
    email: "admin@gmail.com",
  };

  // Hash password
  const hashedPassword = await bcrypt.hash(user.password, 10);

  // Create user
  await User.create({
    name: user.name,
    password: hashedPassword,
    email: user.email,
  });

  // Open server
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
