import { FastifyInstance } from "fastify";
import userRouter from "./user.router";

async function adminRouter(fastify: FastifyInstance) {
    fastify.register(userRouter, { prefix: "/user" });
}

export default adminRouter;
