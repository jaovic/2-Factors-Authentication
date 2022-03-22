import { any } from "joi";

export default class AppError {
  constructor(
    readonly message: any,
    readonly statusCode: any,
    readonly error?: any
  ) {}
}
