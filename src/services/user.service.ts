import userRepository from '../repositories/user.repository';
import { User } from '@prisma/client';

class UserService {
    async createUser(data: Omit<User, 'id'>): Promise<User> {
        return await userRepository.create(data);
    }

    async getUserById(id: number): Promise<User | null> {
        return await userRepository.findById(id);
    }

    async updateUser(id: number, data: Partial<User>): Promise<User> {
        return await userRepository.update(id, data);
    }

    async deleteUser(id: number): Promise<User> {
        return await userRepository.delete(id);
    }

    async getAllUsers(): Promise<User[]> {
        return await userRepository.findAll();
    }
}

export default new UserService();
