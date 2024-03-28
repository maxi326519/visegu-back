import { WorkReportTS } from "../interfaces/ReportsModels/Work";
import { User, WorkReport } from "../db";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";

let workReport: WorkReportTS = {
  customer: "Garcia",
  location: "Buenos Aires",
  timeToStartServices: new Date(),
  equipment: "Equip1",
  dateOfRepair: new Date(),
  timeFinishService: new Date(),
  licensePlate: "Plate",
  PO: "PO1",
  VIN: "V.I.N.1.",
  mechanicName: "Mechanic",
  check: {
    RIF: false,
    ROF: false,
    RIR: false,
    ROR: false,
    LIF: false,
    LOF: false,
    LIR: false,
    LOR: false,
  },
  tableData: [
    {
      code: "C192",
      workDescription: "Ruedas",
      laborTime: 0.5,
      parts: "Part 1",
      total: "100",
    },
  ],
};

// Función de ayuda para generar un token JWT para pruebas
const generateToken = async () => {
  // Get Admin user
  const user = (await User.findOne({ where: { rol: "ADMIN" } }))?.dataValues;
  if (!user) throw new Error("Admin not found");

  // Create token
  if (!process.env.SECRET_KEY) throw new Error("Key not found");
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });
};

describe("Routes - /work", () => {
  let token = "";

  // Create token
  beforeEach(async () => {
    token = await generateToken();
  });

  describe("POST - /work", () => {
    it("Should be create a work report", async () => {
      // Post data
      const response = await request(app)
        .post("/work")
        .set("Authorization", `Bearer ${token}`)
        .send(workReport);

      // Get work created
      const newWork = (await WorkReport.findByPk(response.body.id))?.dataValues;

      // Compare results
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(newWork).not.toBeUndefined();
      expect(newWork).not.toBeNull();

      // Save id
      workReport.id = newWork.id;
    });
  });

  describe("GET - /work", () => {
    it("Should be get all work reports", async () => {
      const response = await request(app)
        .get("/work")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("PATCH - /work", () => {
    it("Should be update the work report", async () => {
      workReport.customer = "Garcia";

      // Update Work
      const response = await request(app)
        .patch("/work")
        .set("Authorization", `Bearer ${token}`)
        .send(workReport);

      // Get Work report
      const workUpdated = (await WorkReport.findByPk(workReport.id))
        ?.dataValues;

      // Compare results
      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Updated successfully");
    });
  });

  describe("DELETE - /work", () => {
    it("Should be delete the work report", async () => {
      // Delete wprk report
      const response = await request(app)
        .delete(`/work/${workReport.id}`)
        .set("Authorization", `Bearer ${token}`);

      // Get Work report
      const workUpdated = (await WorkReport.findByPk(workReport.id))
        ?.dataValues;

      // Compare results
      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Deleted successfully");
      expect(workUpdated).toBeUndefined();
    });
  });
});
