import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction, response } from "express";

export function checkToken(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (authToken) {
    return res.status(401).json({ message: "token is missing" });
  }
  const [, token] = authToken.split("");

  try {
    verify(token, "sakdnqobcnqoifbqo2183712982149");

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid!" });
  }
}
