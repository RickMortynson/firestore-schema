import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
export declare const groupSchema: z.ZodObject<{
    event: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["people", "activities"]>;
    members: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "people" | "activities";
    event: string;
    members: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }[];
    name?: string | undefined;
}, {
    type: "people" | "activities";
    event: string;
    members: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }[];
    name?: string | undefined;
}>;
export declare const groupMessagesSchema: z.ZodObject<{
    message: z.ZodString;
    senderId: z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    }>;
    createdAt: z.ZodUnion<[z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>, z.ZodType<Date, z.ZodTypeDef, Date>]>;
}, "strip", z.ZodTypeAny, {
    createdAt: Date | Timestamp;
    message: string;
    senderId: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    };
}, {
    createdAt: Date | Timestamp;
    message: string;
    senderId: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar?: string | undefined;
    };
}>;
export type GroupType = z.infer<typeof groupSchema>;
export type GroupMessagesType = z.infer<typeof groupMessagesSchema>;
