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
