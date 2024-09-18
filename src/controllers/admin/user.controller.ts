import { FastifyRequest, FastifyReply } from 'fastify';
import userService from '../../services/user.service';
import { User } from '../../models/User.model';

class UserController {
    async createUser(req: FastifyRequest, reply: FastifyReply) {
        const data = req.body as Omit<User, 'id'>;
        const user = await userService.createUser(data);
        reply.send(user);
    }

    async getUserById(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const user = await userService.getUserById(parseInt(id, 10));
        reply.send(user);
    }

    async updateUser(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const data = req.body as Partial<User>;
        const user = await userService.updateUser(parseInt(id, 10), data);
        reply.send(user);
    }

    async deleteUser(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        await userService.deleteUser(parseInt(id, 10));
        reply.send({ message: 'User deleted successfully' });
    }

    async getAllUsers(req: FastifyRequest, reply: FastifyReply) {
        const users = await userService.getAllUsers();
        reply.send(users);
    }
}

export default new UserController();
