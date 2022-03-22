import { Request, Response, NextFunction } from "express";

import AppError from "../error/appError";
import { IError, UNEXPECTED_ERROR } from "./../error";

export default (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { message, statusCode, error } = err;
  if (!err || !statusCode || !message) {
    const internalError = new AppError(UNEXPECTED_ERROR);
    message = internalError.message;
    statusCode = internalError.statusCode;
  }

  res.status(statusCode).json({ status: "error", message, statusCode });
};
