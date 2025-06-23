import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
export declare const groupSchema: z.ZodObject<{
    event: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["people", "activities"]>;
    members: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        name: string;
        avatarURL: string;
        avatar: string;
    }, {
        uid: string;
        name: string;
        avatarURL: string;
        avatar: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "people" | "activities";
    event: string;
    members: {
        uid: string;
        name: string;
        avatarURL: string;
        avatar: string;
    }[];
    name?: string | undefined;
}, {
    type: "people" | "activities";
    event: string;
    members: {
        uid: string;
        name: string;
        avatarURL: string;
        avatar: string;
    }[];
    name?: string | undefined;
}>;
export declare const paymentIntentSchema: z.ZodObject<{
    uid: z.ZodString;
    eventId: z.ZodString;
    amount: z.ZodNumber;
    status: z.ZodString;
    created: z.ZodNumber;
    paymentMethod: z.ZodNullable<z.ZodString>;
    ticketCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    updatedAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    status: string;
    uid: string;
    createdAt: Timestamp;
    eventId: string;
    updatedAt: Timestamp;
    amount: number;
    created: number;
    paymentMethod: string | null;
    ticketCount?: number | null | undefined;
}, {
    status: string;
    uid: string;
    createdAt: Timestamp;
    eventId: string;
    updatedAt: Timestamp;
    amount: number;
    created: number;
    paymentMethod: string | null;
    ticketCount?: number | null | undefined;
}>;
export type PaymentIntentType = z.infer<typeof paymentIntentSchema>;
