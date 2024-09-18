import articleRepository from '../repositories/article.repository';
import { Article } from '@prisma/client';

class ArticleService {
    async createArticle(data: Omit<Article, 'id'>): Promise<Article> {
        return await articleRepository.create(data);
    }

    async getArticleById(id: number): Promise<Article | null> {
        return await articleRepository.findById(id);
    }

    async updateArticle(id: number, data: Partial<Article>): Promise<Article> {
        return await articleRepository.update(id, data);
    }

    async deleteArticle(id: number): Promise<Article> {
        return await articleRepository.delete(id);
    }

    async getAllArticles(): Promise<Article[]> {
        return await articleRepository.findAll();
    }
}

export default new ArticleService();
