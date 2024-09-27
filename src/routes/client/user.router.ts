import { FastifyInstance } from "fastify";
import { authenticate } from "../../middlewares";
import userController from "../../controllers/client/user.controller";
import ClientUserSchema from "../../schema/client/user.schema";
async function userRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "POST",
        url: "/sendSms",
        schema: ClientUserSchema.sendSms,
        handler: userController.sendSms
    });
    fastify.route({
        method: "POST",
        url: "/login",
        schema: ClientUserSchema.login,
        handler: userController.login
    });
    fastify.route({
        method: "GET",
        url: "/me",
        preHandler: [authenticate],
        handler: userController.me
    });
}

export default userRouter;