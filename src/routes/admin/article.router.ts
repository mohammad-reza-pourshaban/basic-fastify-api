import { FastifyInstance } from "fastify";
import { authorize } from "../../middlewares";
import articleController from "../../controllers/admin/article.controller";
import * as articleSchema from "../../schema/admin/article.schema";
async function articleRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "GET",
        url: "/getAllArticles",
        preHandler: [authorize],
        schema: articleSchema.adminArticleGetAllArticlesSchema,
        handler: articleController.getAllArticles,
    });
    fastify.route({
        method: "POST",
        url: "/createArticle",
        preHandler: [authorize],
        schema: articleSchema.adminArticleCreateArticleSchema,
        handler: articleController.createArticle,
    });
    fastify.route({
        method: "POST",
        url: "/deleteArticle",
        preHandler: [authorize],
        schema: articleSchema.adminArticleDeleteArticleSchema,
        handler: articleController.deleteArticle,
    });
    fastify.route({
        method: "GET",
        url: "/getArticleById",
        preHandler: [authorize],
        schema: articleSchema.adminArticleGetArticleByIdSchema,
        handler: articleController.getArticleById,
    });
    fastify.route({
        method: "PUT",
        url: "/updateArticle",
        preHandler: [authorize],
        schema: articleSchema.adminArticleUpdateArticleSchema,
        handler: articleController.updateArticle,
    });
}

export default articleRouter;