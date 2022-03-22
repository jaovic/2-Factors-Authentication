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
  async findByEmail(email: string) {
    return prisma.user.findFirst({ where: { email } });
  }

  async findByCpf(cpf: string) {
    return prisma.user.findFirst({ where: { cpf } });
  }

  async findById(clientId: string) {
    return prisma.user.findFirst({ where: { id: clientId } });
  }
}
