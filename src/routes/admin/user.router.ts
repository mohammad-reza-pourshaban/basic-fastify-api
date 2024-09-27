import { FastifyInstance } from "fastify";
import { authenticate } from "../../middlewares";
import userController from "../../controllers/admin/user.controller";
import * as userSchema from "../../schema/admin/user.schema";
async function userRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "GET",
        url: "/getAllUsers",
        preHandler: [authenticate],
        schema: userSchema.adminUserGetAllUsersSchema,
        handler: userController.create,
    });
    fastify.route({
        method: "POST",
        url: "/createUser",
        preHandler: [authenticate],
        schema: userSchema.adminUserCreateUserSchema,
        handler: userController.create,
    });
}

export default userRouter;