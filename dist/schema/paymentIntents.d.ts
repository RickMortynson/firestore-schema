import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
export declare const paymentIntentSchema: z.ZodObject<{
    uid: z.ZodString;
    eventId: z.ZodString;
    amount: z.ZodNumber;
    status: z.ZodString;
    created: z.ZodNumber;
    paymentMethod: z.ZodNullable<z.ZodString>;
    ticketCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    customer: z.ZodString;
    currency: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    updatedAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    uid: string;
    eventId: string;
    amount: number;
    status: string;
    created: number;
    paymentMethod: string | null;
    customer: string;
    currency: string | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    ticketCount?: number | null | undefined;
}, {
    uid: string;
    eventId: string;
    amount: number;
    status: string;
    created: number;
    paymentMethod: string | null;
    customer: string;
    currency: string | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    ticketCount?: number | null | undefined;
}>;
export type PaymentIntentType = z.infer<typeof paymentIntentSchema>;
