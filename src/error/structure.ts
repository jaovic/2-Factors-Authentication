export class IError {
  constructor(
    public message: string,
    public statusCode: number,
    public error?: any
  ) {}
}
