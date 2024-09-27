import { FastifyRequest, FastifyReply } from 'fastify';
import userService from '../../services/user.service';
import { User } from '../../models/User.model';

class UserController {
    async create(req: FastifyRequest, reply: FastifyReply) {
        const data = req.body as Omit<User, 'id'>;
        const user = await userService.create({ data });
        reply.send(user);
    }

}

export default new UserController();
