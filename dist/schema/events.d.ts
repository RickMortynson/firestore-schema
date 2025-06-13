import { z } from "zod";
import { Timestamp, GeoPoint } from "@firebase/firestore";
export declare const eventAgentsSchema: z.ZodObject<{
    role: z.ZodEnum<["collaborator", "scanner"]>;
    status: z.ZodEnum<["pending", "accepted", "rejected"]>;
    user: z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "accepted" | "rejected" | "pending";
    role: "collaborator" | "scanner";
    user: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
}, {
    status: "accepted" | "rejected" | "pending";
    role: "collaborator" | "scanner";
    user: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
}>;
export declare const eventJoinersSchema: z.ZodObject<{
    phoneNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["going", "rejected", "invited"]>;
    user: z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }>;
    inviteCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "rejected" | "going" | "invited";
    user: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
    phoneNumber?: string | undefined;
    inviteCode?: string | undefined;
}, {
    status: "rejected" | "going" | "invited";
    user: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
    phoneNumber?: string | undefined;
    inviteCode?: string | undefined;
}>;
export declare const eventSchema: z.ZodObject<{
    title: z.ZodString;
    shortId: z.ZodString;
    activity: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    announcements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    capacity: z.ZodOptional<z.ZodNumber>;
    creator: z.ZodObject<{
        uid: z.ZodString;
        name: z.ZodString;
        avatarURL: z.ZodString;
        avatar: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }, {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    }>;
    deadline: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    endDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    fundraising: z.ZodOptional<z.ZodObject<{
        accumulated: z.ZodNumber;
        goal: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        accumulated: number;
        goal: number;
    }, {
        accumulated: number;
        goal: number;
    }>>;
    ticketPrice: z.ZodOptional<z.ZodNumber>;
    imageUri: z.ZodString;
    link: z.ZodOptional<z.ZodString>;
    location: z.ZodObject<{
        location: z.ZodType<GeoPoint, z.ZodTypeDef, GeoPoint>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        location: GeoPoint;
    }, {
        name: string;
        location: GeoPoint;
    }>;
    photos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shareable: z.ZodObject<{
        isPublic: z.ZodBoolean;
        shareableUsers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    }, {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    }>;
    startDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    usersChecked: z.ZodOptional<z.ZodNumber>;
    viewCount: z.ZodNumber;
    eventJoiners: z.ZodArray<z.ZodObject<{
        phoneNumber: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<["going", "rejected", "invited"]>;
        user: z.ZodObject<{
            uid: z.ZodString;
            name: z.ZodString;
            avatarURL: z.ZodString;
            avatar: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        }, {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        }>;
        inviteCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "rejected" | "going" | "invited";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
        phoneNumber?: string | undefined;
        inviteCode?: string | undefined;
    }, {
        status: "rejected" | "going" | "invited";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
        phoneNumber?: string | undefined;
        inviteCode?: string | undefined;
    }>, "many">;
    eventAgents: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<["collaborator", "scanner"]>;
        status: z.ZodEnum<["pending", "accepted", "rejected"]>;
        user: z.ZodObject<{
            uid: z.ZodString;
            name: z.ZodString;
            avatarURL: z.ZodString;
            avatar: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        }, {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
    }, {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
    }>, "many">;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: Timestamp;
    activity: string;
    title: string;
    shortId: string;
    creator: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUri: string;
    location: {
        name: string;
        location: GeoPoint;
    };
    shareable: {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    };
    startDate: Timestamp;
    viewCount: number;
    eventJoiners: {
        status: "rejected" | "going" | "invited";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
        phoneNumber?: string | undefined;
        inviteCode?: string | undefined;
    }[];
    eventAgents: {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
    }[];
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    fundraising?: {
        accumulated: number;
        goal: number;
    } | undefined;
    ticketPrice?: number | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}, {
    createdAt: Timestamp;
    activity: string;
    title: string;
    shortId: string;
    creator: {
        avatarURL: string;
        uid: string;
        name: string;
        avatar: string;
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUri: string;
    location: {
        name: string;
        location: GeoPoint;
    };
    shareable: {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    };
    startDate: Timestamp;
    viewCount: number;
    eventJoiners: {
        status: "rejected" | "going" | "invited";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
        phoneNumber?: string | undefined;
        inviteCode?: string | undefined;
    }[];
    eventAgents: {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            avatarURL: string;
            uid: string;
            name: string;
            avatar: string;
        };
    }[];
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    fundraising?: {
        accumulated: number;
        goal: number;
    } | undefined;
    ticketPrice?: number | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}>;
export type EventType = z.infer<typeof eventSchema>;
export type EventAgentsType = z.infer<typeof eventAgentsSchema>;
export type EventJoinersType = z.infer<typeof eventJoinersSchema>;
