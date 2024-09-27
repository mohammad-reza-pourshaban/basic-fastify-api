import { RoleUser } from '../models/RoleUser.model';
import roleUserRepo from '../repositories/prisma/postgres/roleUser.repository';
import { Prisma } from '@prisma/client';

class RoleUserService {
    async create(data: Prisma.RoleUserCreateArgs): Promise<RoleUser> {
        return await roleUserRepo.create(data);
    }

    async createMany(data: Prisma.RoleUserCreateManyInput[]): Promise<boolean> {
        return await roleUserRepo.createMany(data);
    }

    async findUnique(option: Prisma.RoleUserFindUniqueArgs): Promise<RoleUser | null> {
        return await roleUserRepo.findUnique(option);
    }

    async findFirst(option: Prisma.RoleUserFindFirstArgs): Promise<RoleUser | null> {
        return await roleUserRepo.findFirst(option);
    }

    async findMany(option: Prisma.RoleUserFindManyArgs): Promise<RoleUser[]> {
        return await roleUserRepo.findMany(option);
    }

    async update(option: Prisma.RoleUserUpdateArgs): Promise<RoleUser> {
        return await roleUserRepo.update(option);
    }

    async updateMany(option: Prisma.RoleUserUpdateManyArgs): Promise<boolean> {
        return await roleUserRepo.updateMany(option);
    }

    async delete(option: Prisma.RoleUserDeleteArgs): Promise<RoleUser> {
        return await roleUserRepo.delete(option);
    }

    async deleteMany(options: Prisma.RoleUserDeleteManyArgs): Promise<boolean> {
        return await roleUserRepo.deleteMany(options);
    }
    async count(options: Prisma.RoleUserCountArgs): Promise<number> {
        return await roleUserRepo.count(options);
    }

    async aggregate(options: Prisma.RoleUserAggregateArgs): Promise<any> {
        return await roleUserRepo.aggregate(options);
    }

}

export default new RoleUserService();
