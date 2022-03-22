import { Request, Response } from "express";
import AuthService from "./AuthService";
import { IAuthController } from "./structure";

export default class AuthController implements IAuthController {
  constructor(private authService: AuthService) {}

  async create(req: Request, res: Response): Promise<void> {
    const { name, cpf, email, password } = req.body;
    const newUser = await this.authService.create({
      name,
      cpf,
      email,
      password,
    });
    res.status(200).json({ status: "success", user: newUser });
  }
}
