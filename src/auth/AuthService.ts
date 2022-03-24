import AuthRepository from "./AuthRepository";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { ICreateUser, IAuthService } from "./structure";
import AppError from "../error/appError";
import {
  CPF_ALREADY_REGISTED,
  EMAIL_ALREADY_EXISTS,
  UNPROCESSABLE_ENTITY,
} from "../error";
export default class AuthService implements IAuthService {
  constructor(private authRepository: AuthRepository) {}

  async create(data: ICreateUser) {
    data.password = await bcrypt.hash(data.password, 10);

    const verifyByEmail = await this.authRepository.findByEmail(data.email);

    if (verifyByEmail)
      throw new AppError(EMAIL_ALREADY_EXISTS, UNPROCESSABLE_ENTITY);

    const verifyByCpf = await this.authRepository.findByCpf(data.cpf);

    if (verifyByCpf)
      throw new AppError(CPF_ALREADY_REGISTED, UNPROCESSABLE_ENTITY);

    const user = await this.authRepository.create(data);
    return user;
  }

  async login(email: string, password: string) {
    const verifyByEmail = await this.authRepository.findByEmail(email);

    if (!verifyByEmail)
      throw new AppError(EMAIL_ALREADY_EXISTS, UNPROCESSABLE_ENTITY);

    const login = await bcrypt.compare(password, verifyByEmail.password);

    if (!login) throw new AppError(EMAIL_ALREADY_EXISTS, UNPROCESSABLE_ENTITY);

    const token = jsonwebtoken.sign({}, "sakdnqobcnqoifbqo2183712982149", {
      subject: verifyByEmail.id,
      expiresIn: "60s",
    });
    console.log("teste teste");

    const userId = verifyByEmail.id;

    const genereteRfreshtoken = await this.authRepository.saveToken(userId);
    return { token, genereteRfreshtoken };
  }
}
