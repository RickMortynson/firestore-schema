import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
export declare const groupSchema: z.ZodObject<{
    event: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["people", "activities"]>;
    members: z.ZodArray<z.ZodType<any, z.ZodTypeDef, any>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "people" | "activities";
    event: string;
    members: any[];
    name?: string | undefined;
}, {
    type: "people" | "activities";
    event: string;
    members: any[];
    name?: string | undefined;
}>;
export declare const groupMessagesSchema: z.ZodObject<{
    message: z.ZodString;
    sender: z.ZodType<any, z.ZodTypeDef, any>;
    createdAt: z.ZodUnion<[z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>, z.ZodType<Date, z.ZodTypeDef, Date>]>;
}, "strip", z.ZodTypeAny, {
    createdAt: Date | Timestamp;
    message: string;
    sender?: any;
}, {
    createdAt: Date | Timestamp;
    message: string;
    sender?: any;
}>;
export type GroupType = z.infer<typeof groupSchema>;
export type GroupMessagesType = z.infer<typeof groupMessagesSchema>;
