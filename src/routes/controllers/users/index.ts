const bcrypt = require("bcrypt");
const { User } = require("../../../db");

const setUser = async (user: any) => {
  if (!user.name) throw new Error("missing parameter (name)");
  if (!user.email) throw new Error("missing parameter (email)");
  if (!user.password) throw new Error("missing parameter (password)");

  const alreadyEmail = await User.findOne({
    where: { email: user.email }, // Debes buscar por "email" en lugar de "name"
  });
  if (alreadyEmail) throw new Error("email already exists");

  // Hashear la contraseña antes de almacenarla en la base de datos
  const hashedPassword = await bcrypt.hash(user.password, 10); // 10 es el costo del algoritmo

  // Crea un nuevo usuario con la contraseña hasheada
  const newUser = await User.create({
    name: user.name,
    email: user.email,
    password: hashedPassword, // Almacena la contraseña hasheada en la base de datos
  });

  return newUser;
};

const getUser = async (name: string, value: any) => {
  if (!name || !value) throw new Error("missing parameter");

  const user = await User.findOne({
    where: { [name]: value },
    attributes: {
      exclude: ["password"],
    },
  });

  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
  });

  return allUsers;
};

const updateUser = async (updateUser: any) => {
  const rol = ["ADMIN", "USER"];

  // Verify paramenters
  if (!updateUser.name) throw new Error("missing 'name' parameter");
  if (!updateUser.rol) throw new Error("missing 'rol' parameter");
  if (!rol.includes(updateUser.rol)) throw new Error("invalid rol");

  // Get the user
  const user = await User.findByPk(updateUser.id);

  // Check if th euser exist
  if (!user) throw new Error("user not found");

  // Data to update
  let userToUpdate = updateUser;

  // If password exist add it to user
  if (updateUser.password) {
    userToUpdate.password = await bcrypt.hash(updateUser.password, 10);
  }

  // User update
  user.update(userToUpdate);
};

const disableUser = async (id: string, disabled: boolean) => {
  const user: any = await User.findOne({
    where: { id: id },
  });
  if (user) {
    user.disabled = disabled;
    await user.save();
  } else {
    throw new Error("User not found");
  }
};

const deleteUser = async (userId: string) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.destroy();
  return { message: "Successfully deleted user" };
};

export { setUser, getUser, getAllUsers, updateUser, disableUser, deleteUser };
