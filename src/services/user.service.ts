import { User } from '../models/User.model';
import userRepo from '../repositories/prisma/postgres/user.repository';
import { Prisma } from '@prisma/client';

class UserService {
    async create(option: Prisma.UserCreateArgs): Promise<User> {
        return await userRepo.create(option);
    }

    async createMany(data: Prisma.UserCreateManyInput[]): Promise<boolean> {
        return await userRepo.createMany(data);
    }

    async findUnique(option: Prisma.UserFindUniqueArgs): Promise<User | null> {
        return await userRepo.findUnique(option);
    }

    async findFirst(option: Prisma.UserFindFirstArgs): Promise<User | null> {
        return await userRepo.findFirst(option);
    }

    async findMany(option: Prisma.UserFindManyArgs): Promise<User[]> {
        return await userRepo.findMany(option);
    }

    async update(option: Prisma.UserUpdateArgs): Promise<User> {
        return await userRepo.update(option);
    }

    async updateMany(option: Prisma.UserUpdateManyArgs): Promise<boolean> {
        return await userRepo.updateMany(option);
    }

    async delete(option: Prisma.UserDeleteArgs): Promise<User> {
        return await userRepo.delete(option);
    }

    async deleteMany(options: Prisma.UserDeleteManyArgs): Promise<boolean> {
        return await userRepo.deleteMany(options);
    }

    async count(options: Prisma.UserCountArgs): Promise<number> {
        return await userRepo.count(options);
    }

    async aggregate(options: Prisma.UserAggregateArgs): Promise<any> {
        return await userRepo.aggregate(options);
    }

}

export default new UserService();
