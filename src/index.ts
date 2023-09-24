import { User, conn } from "./db";
const bcrypt = require("bcrypt");
const app = require("./app");
require("./db");


const PORT = process.env.PORT || 3001;

// Inicialización
conn.sync({ force: true }).then(async () => {

  // Hashear la contraseña antes de almacenarla en la base de datos
  const user = {
    name: "ADMIN",
    password: "321654",
    email: "admin@gmail.com"
  };

  const hashedPassword = await bcrypt.hash(user.password, 10); // 10 es el costo del algoritmo

  User.create({
    name: user.name,
    password: hashedPassword,
    email: user.email
  }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening in port ${PORT}`);
    });
  });
});