import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Role } from '../../../models/Role.model';

class PrismaRoleRepository extends PrismaBaseRepository<
    Role,
    Prisma.RoleCreateArgs,
    Prisma.RoleCreateManyInput,
    Prisma.RoleFindUniqueArgs,
    Prisma.RoleFindFirstArgs,
    Prisma.RoleFindManyArgs,
    Prisma.RoleUpdateArgs,
    Prisma.RoleUpdateManyArgs,
    Prisma.RoleDeleteArgs,
    Prisma.RoleDeleteManyArgs,
    Prisma.RoleCountArgs,
    Prisma.RoleAggregateArgs
> {
    constructor() {
        super(new PrismaClient().role);
    }
}

export default new PrismaRoleRepository();
