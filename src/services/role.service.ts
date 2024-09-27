import { Role } from '../models/Role.model';
import roleRepo from '../repositories/prisma/postgres/role.repository';
import { Prisma } from '@prisma/client';

class RoleService {
    async create(data: Prisma.RoleCreateArgs): Promise<Role> {
        return await roleRepo.create(data);
    }

    async createMany(data: Prisma.RoleCreateManyInput[]): Promise<boolean> {
        return await roleRepo.createMany(data);
    }

    async findUnique(option: Prisma.RoleFindUniqueArgs): Promise<Role | null> {
        return await roleRepo.findUnique(option);
    }

    async findFirst(option: Prisma.RoleFindFirstArgs): Promise<Role | null> {
        return await roleRepo.findFirst(option);
    }

    async findMany(option: Prisma.RoleFindManyArgs): Promise<Role[]> {
        return await roleRepo.findMany(option);
    }

    async update(option: Prisma.RoleUpdateArgs): Promise<Role> {
        return await roleRepo.update(option);
    }

    async updateMany(option: Prisma.RoleUpdateManyArgs): Promise<boolean> {
        return await roleRepo.updateMany(option);
    }

    async delete(option: Prisma.RoleDeleteArgs): Promise<Role> {
        return await roleRepo.delete(option);
    }

    async deleteMany(options: Prisma.RoleDeleteManyArgs): Promise<boolean> {
        return await roleRepo.deleteMany(options);
    }

    async count(options: Prisma.RoleCountArgs): Promise<number> {
        return await roleRepo.count(options);
    }

    async aggregate(options: Prisma.RoleAggregateArgs): Promise<any> {
        return await roleRepo.aggregate(options);
    }

}

export default new RoleService();
