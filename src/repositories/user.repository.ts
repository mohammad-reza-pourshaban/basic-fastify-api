import { PrismaClient } from '@prisma/client';
import { User } from '../models/User.model';
const prisma = new PrismaClient();

class UserRepository {
    async create(data: Omit<User, 'id'>): Promise<User> {
        return await prisma.user.create({ data });
    }

    async findById(id: number): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id } });
    }

    async update(id: number, data: Partial<User>): Promise<User> {
        return await prisma.user.update({ where: { id }, data });
    }

    async delete(id: number): Promise<User> {
        return await prisma.user.delete({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }
}

export default new UserRepository();
