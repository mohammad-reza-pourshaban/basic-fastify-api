import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Category } from '../../../models/Category.model';

class PrismaCategoryRepository extends PrismaBaseRepository<
    Category,
    Prisma.CategoryCreateArgs,
    Prisma.CategoryCreateManyInput,
    Prisma.CategoryFindUniqueArgs,
    Prisma.CategoryFindFirstArgs,
    Prisma.CategoryFindManyArgs,
    Prisma.CategoryUpdateArgs,
    Prisma.CategoryUpdateManyArgs,
    Prisma.CategoryDeleteArgs,
    Prisma.CategoryDeleteManyArgs,
    Prisma.CategoryCountArgs,
    Prisma.CategoryAggregateArgs
> {
    constructor() {
        super(new PrismaClient().category);
    }
}

export default new PrismaCategoryRepository();
