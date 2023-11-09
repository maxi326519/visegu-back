const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");

// Función de ayuda para generar un token JWT para pruebas
const generateToken = (user) => {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });
};

describe("Rutas protegidas por JWT", () => {
  it("debería obtener datos protegidos con token", async () => {
    const response = await request(app).post("/login").send({
      email: "admin@gmail.com",
      password: "321654",
    });

    console.log(response);

    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
  });
});
