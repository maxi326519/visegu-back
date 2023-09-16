const bcrypt = require("bcrypt");
const { User } = require("../../../db");
const jwt = require("jsonwebtoken");

const setUser = async (user: any) => {
  if (!user.name) throw new Error("missing parameter (name)");
  if (!user.email) throw new Error("missing parameter (email)");
  if (!user.password) throw new Error("missing parameter (password)");

  const alreadyUser = await User.findOne({
    where: { name: user.name },
  });
  if (alreadyUser) throw new Error("user already exists");

  const alreadyEmail = await User.findOne({
    where: { email: user.email }, // Debes buscar por "email" en lugar de "name"
  });
  if (alreadyEmail) throw new Error("user already exists");

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
      exclude: ['password'],
    },
  });

  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return allUsers;
};

const updateUser = async (updateUser: any) => {
  const rol = ["ADMIN", "USER"];

  if (!updateUser.name) throw new Error("missing 'name' parameter");
  if (!updateUser.password) throw new Error("missing 'password' parameter");
  if (!updateUser.rol) throw new Error("missing 'rol' parameter");
  if (!rol.includes(updateUser.rol)) throw new Error("invalid rol");

  const user = await User.findOne({
    where: { id: updateUser.id },
  });

  if (!user) throw new Error("user not found");

  user.update(updateUser);
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
      throw new Error('User not found');
    }
    await user.destroy();
    return { message: 'Successfully deleted user' };
  };


  const loginUser = async (body: { email: string; password: string }) => {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ where: { email: body.email } });
    if (!user) {
      throw new Error("Invalid email or password: User not found");
    }
    // Verifica la contraseña utilizando bcrypt
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
  
    if (!isPasswordValid) {
      throw new Error("Invalid email or password: Incorrect password");
    }
  
    // Genera un token JWT usando la clave secreta
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "12d",
    });
  
    if (user.disabled) {
      return { user: 'This user is not allowed access' };
    }
  
    return { message: "Login successful", user: user, token: token };
  };

export { setUser, getUser, getAllUsers, updateUser, disableUser, deleteUser, loginUser };