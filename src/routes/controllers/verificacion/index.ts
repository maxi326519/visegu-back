import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";

const secretKey: string | undefined = process.env.SECRET_KEY;

if (secretKey === undefined) {
  throw new Error(
    "The secret key is not defined in the environment variables."
  );
}

const verificarToken = (req: Request, res: Response, next: NextFunction) => {
  next();
/*   const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const decoded = jwt.verify(token, secretKey);
  req.body.user = decoded;
  next(); */
};

export { verificarToken };
