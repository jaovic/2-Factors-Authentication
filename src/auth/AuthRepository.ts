import prisma from "../database/client";
import { IAuthRepository, ICreateUser } from "./structure";

export default class AuthRepository implements IAuthRepository {
  async create(data: ICreateUser) {
    return prisma.user.create({
      data: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
      },
    });
  }
}
