import { FastifyInstance } from "fastify";
import { authorize } from "../../middlewares";
import userController from "../../controllers/admin/user.controller";
import * as userSchema from "../../schema/admin/user.schema";
async function userRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "GET",
        url: "/getAllUsers",
        preHandler: [authorize],
        schema: userSchema.adminUserGetAllUsersSchema,
        handler: userController.getAllUsers,
    });
    fastify.route({
        method: "POST",
        url: "/createUser",
        preHandler: [authorize],
        schema: userSchema.adminUserCreateUserSchema,
        handler: userController.createUser,
    });
    fastify.route({
        method: "POST",
        url: "/deleteUser",
        preHandler: [authorize],
        schema: userSchema.adminUserDeleteUserSchema,
        handler: userController.deleteUser,
    });
    fastify.route({
        method: "GET",
        url: "/getUserById",
        preHandler: [authorize],
        schema: userSchema.adminUserGetUserByIdSchema,
        handler: userController.getUserById,
    });
    fastify.route({
        method: "PUT",
        url: "/updateUser",
        preHandler: [authorize],
        schema: userSchema.adminUserUpdateUserSchema,
        handler: userController.updateUser,
    });
}

export default userRouter;