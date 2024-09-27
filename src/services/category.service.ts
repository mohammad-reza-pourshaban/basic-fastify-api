import { Category } from '../models/Category.model';
import categoryRepo from '../repositories/prisma/postgres/category.repository';
import { Prisma } from '@prisma/client';

class CategoryService {
    async create(data: Prisma.CategoryCreateArgs): Promise<Category> {
        return await categoryRepo.create(data);
    }

    async createMany(data: Prisma.CategoryCreateManyInput[]): Promise<boolean> {
        return await categoryRepo.createMany(data);
    }

    async findUnique(option: Prisma.CategoryFindUniqueArgs): Promise<Category | null> {
        return await categoryRepo.findUnique(option);
    }

    async findFirst(option: Prisma.CategoryFindFirstArgs): Promise<Category | null> {
        return await categoryRepo.findFirst(option);
    }

    async findMany(option: Prisma.CategoryFindManyArgs): Promise<Category[]> {
        return await categoryRepo.findMany(option);
    }

    async update(option: Prisma.CategoryUpdateArgs): Promise<Category> {
        return await categoryRepo.update(option);
    }

    async updateMany(option: Prisma.CategoryUpdateManyArgs): Promise<boolean> {
        return await categoryRepo.updateMany(option);
    }

    async delete(option: Prisma.CategoryDeleteArgs): Promise<Category> {
        return await categoryRepo.delete(option);
    }

    async deleteMany(options: Prisma.CategoryDeleteManyArgs): Promise<boolean> {
        return await categoryRepo.deleteMany(options);
    }

    async count(options: Prisma.CategoryCountArgs): Promise<number> {
        return await categoryRepo.count(options);
    }

    async aggregate(options: Prisma.CategoryAggregateArgs): Promise<any> {
        return await categoryRepo.aggregate(options);
    }

}

export default new CategoryService();
