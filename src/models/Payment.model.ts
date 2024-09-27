import { Payment as prismaPayment, PaymentStatus } from "@prisma/client";

export interface Payment extends prismaPayment {
    status: PaymentStatus;
}