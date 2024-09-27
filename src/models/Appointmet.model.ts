import { Appointment as prismaAppointment, AppointmentType, AppointmentStatus } from "@prisma/client";

export interface Appointment extends prismaAppointment {
    type: AppointmentType;
    status: AppointmentStatus;
}