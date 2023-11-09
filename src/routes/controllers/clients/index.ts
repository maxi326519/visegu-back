const { Clients } = require("../../../db");

const createClient = async (clientData: any) => {
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

// Define la función para actualizar un Client por su ID
const updateClient = async (clientData: any) => {
  const response = await Clients.findOne({
    where: { id: clientData.id },
  });

  if (response) {
    await response.update(clientData);
  } else {
    throw new Error("clientData not found");
  }
};

// Define la función para eliminar un Client por su ID
const deleteClient = async (id: string) => {
  const client = await Clients.findOne({ where: { id } });

  if (!client) {
    throw new Error("client not found");
  }

  await client.destroy();

  return true; // Client eliminada con éxito
}

export {createClient, getAllClients, updateClient, deleteClient}