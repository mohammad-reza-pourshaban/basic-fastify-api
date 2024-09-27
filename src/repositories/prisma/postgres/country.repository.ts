import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Country } from '../../../models/Country.model';

class PrismaCountryRepository extends PrismaBaseRepository<
    Country,
    Prisma.CountryCreateArgs,
    Prisma.CountryCreateManyInput,
    Prisma.CountryFindUniqueArgs,
    Prisma.CountryFindFirstArgs,
    Prisma.CountryFindManyArgs,
    Prisma.CountryUpdateArgs,
    Prisma.CountryUpdateManyArgs,
    Prisma.CountryDeleteArgs,
    Prisma.CountryDeleteManyArgs,
    Prisma.CountryCountArgs,
    Prisma.CountryAggregateArgs
> {
    constructor() {
        super(new PrismaClient().country);
    }
}

export default new PrismaCountryRepository();
