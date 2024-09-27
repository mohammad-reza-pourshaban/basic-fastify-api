import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { RoleUser } from '../../../models/RoleUser.model';

class PrismaRoleUserRepository extends PrismaBaseRepository<
    RoleUser,
    Prisma.RoleUserCreateArgs,
    Prisma.RoleUserCreateManyInput,
    Prisma.RoleUserFindUniqueArgs,
    Prisma.RoleUserFindFirstArgs,
    Prisma.RoleUserFindManyArgs,
    Prisma.RoleUserUpdateArgs,
    Prisma.RoleUserUpdateManyArgs,
    Prisma.RoleUserDeleteArgs,
    Prisma.RoleUserDeleteManyArgs,
    Prisma.RoleUserCountArgs,
    Prisma.RoleUserAggregateArgs
> {
    constructor() {
        super(new PrismaClient().roleUser);
    }
}

export default new PrismaRoleUserRepository();
