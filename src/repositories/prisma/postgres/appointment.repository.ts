import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaBaseRepository } from './base.repository';
import { Appointment } from '../../../models/Appointmet.model';

class PrismaAppointmentRepository extends PrismaBaseRepository<
    Appointment,
    Prisma.AppointmentCreateArgs,
    Prisma.AppointmentCreateManyInput,
    Prisma.AppointmentFindUniqueArgs,
    Prisma.AppointmentFindFirstArgs,
    Prisma.AppointmentFindManyArgs,
    Prisma.AppointmentUpdateArgs,
    Prisma.AppointmentUpdateManyArgs,
    Prisma.AppointmentDeleteArgs,
    Prisma.AppointmentDeleteManyArgs,
    Prisma.AppointmentCountArgs,
    Prisma.AppointmentAggregateArgs
> {
    constructor() {
        super(new PrismaClient().appointment);
    }
}

export default new PrismaAppointmentRepository();
