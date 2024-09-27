import { error, ERRORS } from "../helpers/reply";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticate = async (request, reply) => {
  const authHeader = request.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : request?.body?.token;
  if (!token) return error(reply, "ERROR401", ERRORS.invalidToken);
  const JWT_SECRET = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    request.user = decoded;
  } else {
    return error(reply, "ERROR401", ERRORS.tokenError);
  }
};