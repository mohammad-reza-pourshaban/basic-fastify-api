import { FastifyReply } from "fastify";
import * as Status from "./constants";
const logger = require("pino")();

export const ERRORS = {
  invalidToken: new Error("Token is invalid."),
  userExists: new Error("User already exists"),
  userNotExists: new Error("User not exists"),
  userCredError: new Error("Invalid credential"),
  tokenError: new Error("Invalid Token"),
};

export function success(reply: FastifyReply, msg: any) {
  return reply
    .status(Status.STANDARD.SUCCESS)
    .send({ success: true, data: msg });
}
export function error(reply: FastifyReply, code: any, error?: any) {
  // logger.error(error);
  return reply
    .status(Status[code].statusCode)
    .send({ error: true, data: error || Status[code].message });
}
