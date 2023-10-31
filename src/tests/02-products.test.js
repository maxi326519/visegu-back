import request from "supertest";
import app from "../app"; // Suponiendo que la variable 'app' es tu aplicación Express exportada

describe("Rutas de productos", () => {
  it("debería crear un nuevo producto", async () => {
    const productData = { name: "Nuevo Producto", price: 50.0 };
    const response = await request(app).post("/").send(productData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Nuevo Producto");
  });

  it("debería obtener todos los productos", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("debería actualizar un producto existente", async () => {
    const productData = { name: "Producto para actualizar", price: 30.0 };
    const createResponse = await request(app).post("/").send(productData);

    const updatedProductData = { ...productData, price: 40.0 };
    const updatedResponse = await request(app)
      .patch("/")
      .send(updatedProductData);

    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.body.message).toBe("Product updated successfully");
  });

  it("debería eliminar un producto existente", async () => {
    const productData = { name: "Producto para eliminar", price: 25.0 };
    const createResponse = await request(app).post("/").send(productData);

    const deleteResponse = await request(app).delete(`/${createResponse.body.id}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe(
      `Product with ID ${createResponse.body.id} successfully removed.`
    );
  });

  it("debería deshabilitar un producto existente", async () => {
    const productData = { name: "Producto para deshabilitar", price: 60.0 };
    const createResponse = await request(app).post("/").send(productData);

    const disableResponse = await request(app)
      .patch(`/${createResponse.body.id}`)
      .send({ disabled: true });

    expect(disableResponse.status).toBe(200);
    expect(disableResponse.body.message).toBe(
      "Product disabled successfully"
    );
  });
});
