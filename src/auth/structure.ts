import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface ICreateUser {
  id?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
}

export interface IAuthController {
  create(req: Request, res: Response): Promise<void>;
}

export interface IAuthService {
  create(data: ICreateUser): Promise<Omit<User, "password">>;
}

export interface IAuthRepository {
  create(data: ICreateUser): Promise<User>;
}
