export interface IRepository<T> {
    create(option: any): Promise<T>;
    findMany(option: any): Promise<T[]>;
    findFirst(option: any): Promise<T | null>;
    findUnique(option: any): Promise<T | null>;
    update(option: any): Promise<T>;
    delete(option: any): Promise<T>;
    count(option: any): Promise<number>;
    createMany(option: any): Promise<boolean>;
    updateMany(option: any): Promise<boolean>;
    deleteMany(option: any): Promise<boolean>;
    aggregate(option: any): Promise<any>;
}
