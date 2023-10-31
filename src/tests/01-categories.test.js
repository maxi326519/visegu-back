import request from "supertest";
import app from "../app"; // Suponiendo que la variable 'app' es tu aplicación Express exportada

describe("Rutas de categorías", () => {
  it("debería crear una nueva categoría", async () => {
    const response = await request(app)
      .post("/")
      .send({ name: "Nueva Categoría" });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Nueva Categoría");
  });

  it("debería obtener todas las categorías", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("debería actualizar una categoría existente", async () => {
    const response = await request(app)
      .post("/")
      .send({ name: "Categoría para actualizar" });

    const updatedResponse = await request(app)
      .patch(`/${response.body.id}`)
      .send({ name: "Categoría Actualizada" });

    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.body.name).toBe("Categoría Actualizada");
  });

  it("debería eliminar una categoría existente", async () => {
    const response = await request(app)
      .post("/")
      .send({ name: "Categoría para eliminar" });

    const deleteResponse = await request(app).delete(`/${response.body.id}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe(
      `Category with ID ${response.body.id} successfully deleted.`
    );
  });
});