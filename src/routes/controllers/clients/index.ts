import { ClientsTS } from "../../../interfaces/ClientsTS";
const { Clients } = require("../../../db");

const createClient = async (clientData: ClientsTS) => {
    if (!clientData.name) throw new Error("Missing parameter: name");
    if (!clientData.email) throw new Error("Missing parameter: email");
    if (!clientData.phoneNumber) throw new Error("Missing parameter: phoneNumber");
    if (!clientData.billingAdress) throw new Error("Missing parameter: billingAdress");
    if (!clientData.shippingAdress) throw new Error("Missing parameter: shippingAdress");
  
    // Verificar si el correo electrónico ya existe en la base de datos
    const existingClient = await Clients.findOne({
      where: { email: clientData.email },
    });
  
    if (existingClient) {
      throw new Error("Client already exists");
    }
  
    // Crea un nuevo cliente en la base de datos
    const newClient = await Clients.create(clientData);
  
    return newClient;
}

const getAllClients= async () => {
  const clients = await Clients.findAll();
  return clients;
}

const updateClient = async (clientId: string, updatedData: ClientsTS) => {
  const client = await Clients.findByPk(clientId);

  if (!client) {
    throw new Error('Client not found');
  }

  await client.update(updatedData);
  return client;
}

const deleteClient = async (clientId: string) => {
  const client = await Clients.findByPk(clientId);

  if (!client) {
    throw new Error('Cliente no encontrado');
  }

  await client.destroy();
  return client;
}

export {createClient, getAllClients, updateClient, deleteClient}