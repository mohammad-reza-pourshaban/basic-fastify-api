import { FastifyInstance } from "fastify";
import adminRouter from "./admin";
import clientRouter from "./client";

const routes = (server: FastifyInstance) => {
  server.get("/", (request, reply) => {
    reply.send({ name: "fastify-typescript" });
  });
  server.register(adminRouter, { prefix: "/api/admin" });
  server.register(clientRouter, { prefix: "/api" });
};
export default routes;
