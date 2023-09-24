const bcrypt = require("bcrypt");
const { User } = require("../../../db");
const jwt = require("jsonwebtoken");


const loginUser = async (body: { email: string; password: string }) => {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ where: { email: body.email } });
    if (!user) {
      throw new Error("User not found");
    }
    // Verifica la contraseña utilizando bcrypt
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
  
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
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

  export { loginUser };