import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
export declare const groupMessagesSchema: z.ZodObject<{
    message: z.ZodString;
    sender: z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }, {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }>;
    createdAt: z.ZodUnion<[z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>, z.ZodType<Date, z.ZodTypeDef, Date>]>;
}, "strip", z.ZodTypeAny, {
    createdAt: Date | Timestamp;
    message: string;
    sender: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
}, {
    createdAt: Date | Timestamp;
    message: string;
    sender: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
}>;
export declare const groupSchema: z.ZodObject<{
    event: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["people", "activities"]>;
    memberIds: z.ZodArray<z.ZodString, "many">;
    members: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }, {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }>, "many">;
    lastMessage: z.ZodObject<{
        message: z.ZodString;
        sender: z.ZodObject<{
            uid: z.ZodString;
            name: z.ZodString;
            avatarURL: z.ZodOptional<z.ZodString>;
            avatar: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        }, {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        }>;
        createdAt: z.ZodUnion<[z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>, z.ZodType<Date, z.ZodTypeDef, Date>]>;
    }, "strip", z.ZodTypeAny, {
        createdAt: Date | Timestamp;
        message: string;
        sender: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }, {
        createdAt: Date | Timestamp;
        message: string;
        sender: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    type: "people" | "activities";
    memberIds: string[];
    members: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }[];
    lastMessage: {
        createdAt: Date | Timestamp;
        message: string;
        sender: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    };
    name?: string | undefined;
    event?: string | undefined;
}, {
    type: "people" | "activities";
    memberIds: string[];
    members: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    }[];
    lastMessage: {
        createdAt: Date | Timestamp;
        message: string;
        sender: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    };
    name?: string | undefined;
    event?: string | undefined;
}>;
export type GroupType = z.infer<typeof groupSchema>;
export type GroupMessagesType = z.infer<typeof groupMessagesSchema>;
