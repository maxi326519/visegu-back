import { Customers } from "../../../db";

const createClient = async (customerData: any) => {
  if (!customerData.name) throw new Error("missing parameter: name");

  // Verificar si el correo electrónico ya existe en la base de datos
  if (customerData.email) {
    const existingClient = await Customers.findOne({
      where: { email: customerData.email },
    });
    if (existingClient) throw new Error("Customer already exists");
  }

  // Crea un nuevo customere en la base de datos
  const newClient = await Customers.create(customerData);

  return newClient;
};

const getAllCustomers = async () => {
  const customers = await Customers.findAll();
  return customers;
};

// Define la función para actualizar un Client por su ID
const updateCustomer = async (customerData: any) => {
  const response = await Customers.findOne({
    where: { id: customerData.id },
  });

  if (response) {
    await response.update(customerData);
  } else {
    throw new Error("Customer not found");
  }
};

// Define la función para eliminar un Client por su ID
const deleteCustomer = async (id: string) => {
  const customer = await Customers.findOne({ where: { id } });

  if (!customer) {
    throw new Error("customer not found");
  }

  await customer.destroy();

  return true; // Client eliminada con éxito
};

export { createClient, getAllCustomers, updateCustomer, deleteCustomer };
