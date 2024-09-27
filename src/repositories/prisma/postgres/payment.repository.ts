import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Payment } from '../../../models/Payment.model';

class PrismaPaymentRepository extends PrismaBaseRepository<
    Payment,
    Prisma.PaymentCreateArgs,
    Prisma.PaymentCreateManyInput,
    Prisma.PaymentFindUniqueArgs,
    Prisma.PaymentFindFirstArgs,
    Prisma.PaymentFindManyArgs,
    Prisma.PaymentUpdateArgs,
    Prisma.PaymentUpdateManyArgs,
    Prisma.PaymentDeleteArgs,
    Prisma.PaymentDeleteManyArgs,
    Prisma.PaymentCountArgs,
    Prisma.PaymentAggregateArgs
> {
    constructor() {
        super(new PrismaClient().payment);
    }
}

export default new PrismaPaymentRepository();
