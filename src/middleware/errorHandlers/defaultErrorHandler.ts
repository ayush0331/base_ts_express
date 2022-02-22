import { ErrorRequestHandler } from "express";
import { AppLogger } from "../../utils/logger/appLogger";

export const defaultErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  AppLogger.error(err.status, err.message);
  console.log(err.message, err.statusCode);
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).json({
    status: err.statusCode || 500,
    message: err.message || "An Unknown Error",
  });
};
