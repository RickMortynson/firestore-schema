import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
export const paymentIntentSchema = z.object({
    uid: z.string(),
    eventId: z.string(),
    amount: z.number(),
    status: z.string(),
    created: z.number(),
    paymentMethod: z.string().nullable(),
    ticketCount: z.number().optional().nullable(),
    customer: z.string(),
    currency: z.string().nullable(),
    createdAt: z.instanceof(Timestamp),
    updatedAt: z.instanceof(Timestamp),
});
