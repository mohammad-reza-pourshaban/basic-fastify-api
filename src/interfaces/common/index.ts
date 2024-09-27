import { FastifyRequest } from "fastify";
import { User } from "../../models/User.model";

export interface IApiResponse {
  error: string;
  statusCode: number;
  message: string;
  data: any;
}


export interface FastifyRequestEx extends FastifyRequest {
  user?: User;
}