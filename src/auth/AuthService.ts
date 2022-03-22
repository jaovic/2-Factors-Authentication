import AuthRepository from "./AuthRepository";
import bcrypt from "bcrypt";
import { ICreateUser, IAuthService } from "./structure";
export default class AuthService implements IAuthService {
  constructor(private authRepository: AuthRepository) {}

  async create(data: ICreateUser) {
    data.password = await bcrypt.hash(data.password, 10);
    const user = await this.authRepository.create(data);
    return user;
  }
}
