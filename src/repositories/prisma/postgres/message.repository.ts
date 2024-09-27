import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Message } from '../../../models/Message.model';

class PrismaMessageRepository extends PrismaBaseRepository<
    Message,
    Prisma.MessageCreateArgs,
    Prisma.MessageCreateManyInput,
    Prisma.MessageFindUniqueArgs,
    Prisma.MessageFindFirstArgs,
    Prisma.MessageFindManyArgs,
    Prisma.MessageUpdateArgs,
    Prisma.MessageUpdateManyArgs,
    Prisma.MessageDeleteArgs,
    Prisma.MessageDeleteManyArgs,
    Prisma.MessageCountArgs,
    Prisma.MessageAggregateArgs
> {
    constructor() {
        super(new PrismaClient().message);
    }
}

export default new PrismaMessageRepository();
