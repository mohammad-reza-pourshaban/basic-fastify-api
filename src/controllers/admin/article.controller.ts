import { FastifyRequest, FastifyReply } from 'fastify';
import articleService from '../../services/article.service';
import { Article } from '../../models/Article.model';

class ArticleController {
    async createArticle(req: FastifyRequest, reply: FastifyReply) {
        const data = req.body as Omit<Article, 'id'>;
        const article = await articleService.createArticle(data);
        reply.send(article);
    }

    async getArticleById(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const article = await articleService.getArticleById(parseInt(id, 10));
        reply.send(article);
    }

    async updateArticle(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const data = req.body as Partial<Article>;
        const article = await articleService.updateArticle(parseInt(id, 10), data);
        reply.send(article);
    }

    async deleteArticle(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        await articleService.deleteArticle(parseInt(id, 10));
        reply.send({ message: 'Article deleted successfully' });
    }

    async getAllArticles(req: FastifyRequest, reply: FastifyReply) {
        const articles = await articleService.getAllArticles();
        reply.send(articles);
    }
}

export default new ArticleController();
