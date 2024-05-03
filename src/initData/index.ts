import { Customers, Locations, Services, User } from "../db";
import customers from "./customers";
import services from "./services";
import locations from "./locations";

const bcrypt = require("bcrypt");

export async function initData() {
  console.log(customers);
  console.log(services);
  console.log(locations);

  (customers as unknown as any[]).forEach((customer: any) => {
    Customers.create(customer);
  });

  (services as unknown as any[]).forEach((service: any) => {
    Services.create(service);
  });

  (locations as unknown as string[]).forEach((location: any) => {
    Locations.create(location);
  });

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
}
