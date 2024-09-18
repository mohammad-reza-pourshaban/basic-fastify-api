import { User } from "../../models/User.model";
import * as fs from 'fs';
import * as path from 'path';
import prisma from "../../helpers/prisma";

class UserDataSeeder {
    private users: Omit<User, "id">[];
    constructor() {
        const filePath = path.join(__dirname, 'user.json');
        this.users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    async run(): Promise<void> {
        Promise.all(await this.users.map(async user => {
            const userExist = await prisma.user.findUnique({ where: { email: user.email } });
            if (!userExist) await prisma.user.create({ data: user });
        }))
    }
}

export default new UserDataSeeder();