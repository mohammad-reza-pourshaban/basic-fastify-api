import { Prisma } from "@prisma/client";
import { IPrismaRepository } from "../../../interfaces/repository/IPrismaRepository";

export class PrismaBaseRepository<
    T,
    CreateArgs,
    CreateManyInput,
    FindUniqueArgs,
    FindFirstArgs,
    FindManyArgs,
    UpdateArgs,
    UpdateManyArgs,
    DeleteArgs,
    DeleteManyArgs,
    CountArgs,
    AggregateArgs
> implements IPrismaRepository<
    T,
    CreateArgs,
    CreateManyInput,
    FindUniqueArgs,
    FindFirstArgs,
    FindManyArgs,
    UpdateArgs,
    UpdateManyArgs,
    DeleteArgs,
    DeleteManyArgs,
    CountArgs,
    AggregateArgs
> {
    protected model: any;

    constructor(model: any) {
        this.model = model;
    }
    async create(option: CreateArgs): Promise<T> {
        return await this.model.create(option);
    }

    async createMany(option: CreateManyInput[]): Promise<boolean> {
        const createResult = await this.model.createMany(option);
        return createResult.count > 0;
    }

    async findUnique(option: FindUniqueArgs): Promise<T | null> {
        return await this.model.findUnique(option);
    }

    async findFirst(option: FindFirstArgs): Promise<T | null> {
        return await this.model.findFirst(option);
    }

    async findMany(option: FindManyArgs): Promise<T[]> {
        return await this.model.findMany(option);
    }

    async update(option: UpdateArgs): Promise<T> {
        return await this.model.update(option);
    }

    async updateMany(option: UpdateManyArgs): Promise<boolean> {
        const updateResult = await this.model.updateMany(option);
        return updateResult.count > 0;
    }

    async delete(option: DeleteArgs): Promise<T> {
        return await this.model.delete(option);
    }

    async deleteMany(option: DeleteManyArgs): Promise<boolean> {
        const deleteResult = await this.model.deleteMany(option);
        return deleteResult.count > 0;
    }

    async count(option: CountArgs): Promise<number> {
        return await this.model.count(option);
    }

    async aggregate(option: AggregateArgs): Promise<any> {
        return await this.model.aggregate(option);
    }
}
