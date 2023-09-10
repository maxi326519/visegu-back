import { User } from "../../../db";

const setUser = async (user: any) => {
  if (!user.name) throw new Error("missing parameter (name)");
  if (!user.email) throw new Error("missing parameter (email)");
  if (!user.password) throw new Error("missing parameter (password)");

  const alreadyUser = await User.findOne({
    where: { name: user.name },
  });
  if (alreadyUser) throw new Error("user already exists");

  const alreadyEmail = await User.findOne({
    where: { name: user.email },
  });
  if (alreadyEmail) throw new Error("user already exists");

  const newUser = await User.create(user);
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

export { setUser, getUser, getAllUsers, updateUser, disableUser, deleteUser };