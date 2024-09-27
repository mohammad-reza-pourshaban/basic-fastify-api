import { Country } from '../models/Country.model';
import countryRepo from '../repositories/prisma/postgres/country.repository';
import { Prisma } from '@prisma/client';

class CountryService {
    async create(data: Prisma.CountryCreateArgs): Promise<Country> {
        return await countryRepo.create(data);
    }

    async createMany(data: Prisma.CountryCreateManyInput[]): Promise<boolean> {
        return await countryRepo.createMany(data);
    }

    async findUnique(option: Prisma.CountryFindUniqueArgs): Promise<Country | null> {
        return await countryRepo.findUnique(option);
    }

    async findFirst(option: Prisma.CountryFindFirstArgs): Promise<Country | null> {
        return await countryRepo.findFirst(option);
    }

    async findMany(option: Prisma.CountryFindManyArgs): Promise<Country[]> {
        return await countryRepo.findMany(option);
    }

    async update(option: Prisma.CountryUpdateArgs): Promise<Country> {
        return await countryRepo.update(option);
    }

    async updateMany(option: Prisma.CountryUpdateManyArgs): Promise<boolean> {
        return await countryRepo.updateMany(option);
    }

    async delete(option: Prisma.CountryDeleteArgs): Promise<Country> {
        return await countryRepo.delete(option);
    }

    async deleteMany(options: Prisma.CountryDeleteManyArgs): Promise<boolean> {
        return await countryRepo.deleteMany(options);
    }

    async count(options: Prisma.CountryCountArgs): Promise<number> {
        return await countryRepo.count(options);
    }

    async aggregate(options: Prisma.CountryAggregateArgs): Promise<any> {
        return await countryRepo.aggregate(options);
    }

}

export default new CountryService();
