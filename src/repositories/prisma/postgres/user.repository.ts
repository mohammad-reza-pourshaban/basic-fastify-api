import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { User } from '../../../models/User.model';

class PrismaUserRepository extends PrismaBaseRepository<
    User,
    Prisma.UserCreateArgs,
    Prisma.UserCreateManyInput,
    Prisma.UserFindUniqueArgs,
    Prisma.UserFindFirstArgs,
    Prisma.UserFindManyArgs,
    Prisma.UserUpdateArgs,
    Prisma.UserUpdateManyArgs,
    Prisma.UserDeleteArgs,
    Prisma.UserDeleteManyArgs,
    Prisma.UserCountArgs,
    Prisma.UserAggregateArgs
> {
    constructor() {
        super(new PrismaClient().user);
    }
}

export default new PrismaUserRepository();
