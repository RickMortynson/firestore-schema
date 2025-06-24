import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
export declare const calendarSchema: z.ZodObject<{
    eventId: z.ZodString;
    joinerId: z.ZodString;
    eventType: z.ZodEnum<["ticketed", "fundraising", "base"]>;
    startDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    updatedAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    startDate: Timestamp;
    createdAt: Timestamp;
    eventId: string;
    joinerId: string;
    eventType: "ticketed" | "fundraising" | "base";
    updatedAt: Timestamp;
}, {
    startDate: Timestamp;
    createdAt: Timestamp;
    eventId: string;
    joinerId: string;
    eventType: "ticketed" | "fundraising" | "base";
    updatedAt: Timestamp;
}>;
export type CalendarType = z.infer<typeof calendarSchema>;
