import { PrismaClient } from '@prisma/client';
import { Article } from '../models/Article.model';
const prisma = new PrismaClient();

class ArticleRepository {
    async create(data: Omit<Article, 'id'>): Promise<Article> {
        return await prisma.article.create({ data });
    }

    async findById(id: number): Promise<Article | null> {
        return await prisma.article.findUnique({ where: { id } });
    }

    async update(id: number, data: Partial<Article>): Promise<Article> {
        return await prisma.article.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Article> {
        return await prisma.article.delete({ where: { id } });
    }

    async findAll(): Promise<Article[]> {
        return await prisma.article.findMany();
    }
}

export default new ArticleRepository();
