const logger = require("pino")();
import { FastifyReply, FastifyRequest } from "fastify";
import { IApiResponse } from "../interfaces";
import { IResponseException, InternalServerErrorException } from "./errors";

export const ErrorResponse = (
  req: FastifyRequest,
  res: FastifyReply,
  error: Error
) => {
  logger.error(error);
  if (error instanceof IResponseException) {
    const e = error as IResponseException;
    const resp: IApiResponse = {
      error: e.name,
      statusCode: e.statusCode,
      message: e.message,
      data: null,
    };
    return res.status(e.statusCode).send(resp);
  } else {
    var e = new InternalServerErrorException();
    const resp: IApiResponse = {
      error: e.name,
      statusCode: e.statusCode,
      message: e.message,
      data: null,
    };
    return res.status(500).send(resp);
  }
};

export const SuccessResponse = (
  res: FastifyReply,
  { statusCode = 200, message = null, data = null }
) => {
  const resp: IApiResponse = {
    error: null,
    statusCode,
    message,
    data,
  };
  return res.status(statusCode).send(resp);
};
