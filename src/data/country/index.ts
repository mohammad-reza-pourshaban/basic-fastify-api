import * as fs from 'fs';
import * as path from 'path';
import prisma from "../../helpers/prisma";
import { Country } from '../../models/Country.model';

class CountryDataSeeder {
    private countries: Country[];
    constructor() {
        const filePath = path.join(__dirname, 'country.json');
        this.countries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    async run(): Promise<void> {
        Promise.all(await this.countries.map(async country => {
            const countryExist = await prisma.country.findUnique({ where: { id: country.id } });
            if (!countryExist) await prisma.country.create({ data: country });
        }))
    }
}

export default new CountryDataSeeder();