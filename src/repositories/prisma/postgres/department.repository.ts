import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Department } from '../../../models/Department.model';

class PrismaDepartmentRepository extends PrismaBaseRepository<
    Department,
    Prisma.DepartmentCreateArgs,
    Prisma.DepartmentCreateManyInput,
    Prisma.DepartmentFindUniqueArgs,
    Prisma.DepartmentFindFirstArgs,
    Prisma.DepartmentFindManyArgs,
    Prisma.DepartmentUpdateArgs,
    Prisma.DepartmentUpdateManyArgs,
    Prisma.DepartmentDeleteArgs,
    Prisma.DepartmentDeleteManyArgs,
    Prisma.DepartmentCountArgs,
    Prisma.DepartmentAggregateArgs
> {
    constructor() {
        super(new PrismaClient().department);
    }
}

export default new PrismaDepartmentRepository();
