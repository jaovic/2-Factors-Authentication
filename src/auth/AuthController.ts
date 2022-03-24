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

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const userLogin = await this.authService.login(email, password);
    res.status(200).json({ status: "Login success", user: userLogin });
  }

  // async logout(req: Request, res: Response) {
  //   const id = req.body.id;
  //   const saveToken = await this.authService.saveToken(id);
  // }
}
