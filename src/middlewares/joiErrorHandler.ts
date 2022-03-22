import { CelebrateError, isCelebrateError } from "celebrate";
import { Request, Response, NextFunction } from "express";

export default (
  err: CelebrateError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isCelebrateError(err)) {
    return res
      .status(400)
      .json({
        status: "error",
        message: err.message,
        details: err.details.entries().next().value[1].details[0].message,
        statusCode: 400,
      });
  }
  
  return next(err);
};
