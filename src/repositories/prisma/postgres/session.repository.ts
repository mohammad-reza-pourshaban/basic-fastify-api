import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Session } from '../../../models/Session.model';

class PrismaSessionRepository extends PrismaBaseRepository<
    Session,
    Prisma.SessionCreateArgs,
    Prisma.SessionCreateManyInput,
    Prisma.SessionFindUniqueArgs,
    Prisma.SessionFindFirstArgs,
    Prisma.SessionFindManyArgs,
    Prisma.SessionUpdateArgs,
    Prisma.SessionUpdateManyArgs,
    Prisma.SessionDeleteArgs,
    Prisma.SessionDeleteManyArgs,
    Prisma.SessionCountArgs,
    Prisma.SessionAggregateArgs
> {
    constructor() {
        super(new PrismaClient().session);
    }
}

export default new PrismaSessionRepository();
