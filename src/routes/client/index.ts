import { FastifyInstance } from "fastify";
import userRouter from "./user.router";

async function clientRouter(fastify: FastifyInstance) {
    fastify.register(userRouter, { prefix: "/user" });
}

export default clientRouter;
