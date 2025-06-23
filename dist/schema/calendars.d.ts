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
    eventId: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    joinerId: string;
    eventType: "ticketed" | "fundraising" | "base";
    startDate: Timestamp;
}, {
    eventId: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    joinerId: string;
    eventType: "ticketed" | "fundraising" | "base";
    startDate: Timestamp;
}>;
export type CalendarType = z.infer<typeof calendarSchema>;
