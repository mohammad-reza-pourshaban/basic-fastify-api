import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Article } from '../../../models/Article.model';

class PrismaArticleRepository extends PrismaBaseRepository<
    Article,
    Prisma.ArticleCreateArgs,
    Prisma.ArticleCreateManyInput,
    Prisma.ArticleFindUniqueArgs,
    Prisma.ArticleFindFirstArgs,
    Prisma.ArticleFindManyArgs,
    Prisma.ArticleUpdateArgs,
    Prisma.ArticleUpdateManyArgs,
    Prisma.ArticleDeleteArgs,
    Prisma.ArticleDeleteManyArgs,
    Prisma.ArticleCountArgs,
    Prisma.ArticleAggregateArgs
> {
    constructor() {
        super(new PrismaClient().article);
    }
}

export default new PrismaArticleRepository();
