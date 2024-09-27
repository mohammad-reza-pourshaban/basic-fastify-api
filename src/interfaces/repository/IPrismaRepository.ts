import { Prisma } from '@prisma/client';
import { IRepository } from './IRepository';

export interface IPrismaRepository<
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

> extends IRepository<T> {
    create(option: CreateArgs): Promise<T>;
    createMany(option: CreateManyInput[]): Promise<boolean>;
    findUnique(option: FindUniqueArgs): Promise<T | null>;
    findFirst(option: FindFirstArgs): Promise<T | null>;
    findMany(option: FindManyArgs): Promise<T[]>;
    update(option: UpdateArgs): Promise<T>;
    updateMany(option: UpdateManyArgs): Promise<boolean>;
    delete(option: DeleteArgs): Promise<T>;
    deleteMany(option: DeleteManyArgs): Promise<boolean>;
    count(option: CountArgs): Promise<number>;
    aggregate(option: AggregateArgs): Promise<any>;
}
