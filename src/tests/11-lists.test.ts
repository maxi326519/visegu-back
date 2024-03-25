const supertest = require("supertest");
import app from "../app";
const {
  Locations,
  Equipments,
  Parts,
  States,
  ChassisOwwnerOrLessor,
} = require("../db");

const request = supertest(app);

// Función auxiliar para limpiar las tablas antes de cada test
async function clearTables() {
  await Promise.all([
    Locations.destroy({ where: {} }),
    Equipments.destroy({ where: {} }),
    Parts.destroy({ where: {} }),
    States.destroy({ where: {} }),
    ChassisOwwnerOrLessor.destroy({ where: {} }),
  ]);
}

// Ejemplo de cómo testear el endpoint POST para añadir elementos a una tabla
describe("POST /lists", () => {
  beforeEach(async () => {
    await clearTables();
  });

  test("It should add two elements to the Locations table", async () => {
    const response = await request
      .post("/lists")
      .send({ name: "locations", values: ["Location1", "Location2"] })
      .expect(200);

    const locations = await Locations.findAll();
    expect(locations.length).toBe(2);
    expect(locations.map((l: any) => l.name)).toEqual(
      expect.arrayContaining(["Location1", "Location2"])
    );
  });

  // Aquí puedes añadir tests similares para las demás tablas...
});

// Ejemplo de cómo testear el endpoint GET para obtener todos los elementos
describe("GET /lists", () => {
  beforeEach(async () => {
    await clearTables();
    // Considera añadir aquí algunos elementos a tus tablas para probar el GET
  });

  test("It should retrieve elements from all tables", async () => {
    const response = await request.get("/lists").expect(200);
    // Ajusta estas verificaciones según la estructura de tu respuesta
    expect(response.body.lists.locations).toBeDefined();
    expect(response.body.lists.equipment).toBeDefined();
    // Añade más verificaciones para las demás tablas...
  });
});

// Ejemplo de cómo testear el endpoint DELETE para eliminar elementos de una tabla
describe("DELETE /lists", () => {
  beforeEach(async () => {
    await clearTables();
    // Considera añadir aquí algunos elementos a tus tablas para probar el DELETE
  });

  test("It should delete an element from the Locations table", async () => {
    // Añadir primero un par de elementos a 'Locations' para luego intentar eliminar uno
    await Locations.bulkCreate([{ name: "Location1" }, { name: "Location2" }]);

    await request
      .delete("/lists")
      .send({ name: "locations", values: ["Location1"] })
      .expect(200);

    const locations = await Locations.findAll();
    expect(locations.length).toBe(1);
    expect(locations[0].name).toBe("Location2");
  });

  // Aquí puedes añadir tests similares para las demás tablas...
});
