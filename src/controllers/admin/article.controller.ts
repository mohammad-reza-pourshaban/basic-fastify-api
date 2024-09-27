import { FastifyRequest, FastifyReply } from 'fastify';
import articleService from '../../services/article.service';
import { Article } from '../../models/Article.model';

class ArticleController {
    async create(req: FastifyRequest, reply: FastifyReply) {
        const data = req.body as Omit<Article, 'id'>;
        const article = await articleService.create(data);
        reply.send(article);
    }

}

export default new ArticleController();
