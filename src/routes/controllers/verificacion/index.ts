import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";

const secretKey: string | undefined = process.env.SECRET_KEY;

if (secretKey === undefined) {
  throw new Error(
    "The secret key is not defined in the environment variables."
  );
}

const verificarToken = (req: Request, res: Response, next: NextFunction) => {
  console.log("asdasd");
  try {
    // Get token to header
    const token = req.headers.authorization?.split(" ")[1];

    console.log(token);

    // Check token
    if (!token) throw new Error("Token not provided");

    // Decode info in th token
    const decoded = jwt.verify(token, secretKey);

    // Add user data to req with the next function
    req.body.user = decoded;

    next();
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

export { verificarToken };
