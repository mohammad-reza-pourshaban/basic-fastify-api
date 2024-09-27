import { Article } from '../models/Article.model';
import articleRepository from '../repositories/prisma/postgres/article.repository';
import { Prisma } from '@prisma/client';

class ArticleService {
    async create(data: Prisma.ArticleCreateArgs): Promise<Article> {
        return await articleRepository.create(data);
    }

    async createMany(data: Prisma.ArticleCreateManyInput[]): Promise<boolean> {
        return await articleRepository.createMany(data);
    }

    async findUnique(option: Prisma.ArticleFindUniqueArgs): Promise<Article | null> {
        return await articleRepository.findUnique(option);
    }

    async findFirst(option: Prisma.ArticleFindFirstArgs): Promise<Article | null> {
        return await articleRepository.findFirst(option);
    }

    async findMany(option: Prisma.ArticleFindManyArgs): Promise<Article[]> {
        return await articleRepository.findMany(option);
    }

    async update(option: Prisma.ArticleUpdateArgs): Promise<Article> {
        return await articleRepository.update(option);
    }

    async updateMany(option: Prisma.ArticleUpdateManyArgs): Promise<boolean> {
        return await articleRepository.updateMany(option);
    }

    async delete(option: Prisma.ArticleDeleteArgs): Promise<Article> {
        return await articleRepository.delete(option);
    }

    async deleteMany(options: Prisma.ArticleDeleteManyArgs): Promise<boolean> {
        return await articleRepository.deleteMany(options);
    }

    async count(options: Prisma.ArticleCountArgs): Promise<number> {
        return await articleRepository.count(options);
    }

    async aggregate(options: Prisma.ArticleAggregateArgs): Promise<any> {
        return await articleRepository.aggregate(options);
    }

}

export default new ArticleService();
