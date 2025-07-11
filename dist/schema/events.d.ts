import { z } from "zod";
import { Timestamp, GeoPoint } from "@firebase/firestore";
export declare const eventTypeSchema: z.ZodEnum<["ticketed", "fundraising", "base"]>;
export declare const eventAgentsSchema: z.ZodObject<{
    role: z.ZodEnum<["collaborator", "scanner"]>;
    status: z.ZodEnum<["pending", "accepted", "rejected"]>;
    user: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "accepted" | "rejected" | "pending";
    role: "collaborator" | "scanner";
    user: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
}, {
    status: "accepted" | "rejected" | "pending";
    role: "collaborator" | "scanner";
    user: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
}>;
export declare const eventSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodEnum<["ticketed", "fundraising", "base"]>;
    shortId: z.ZodString;
    activity: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    announcements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    capacity: z.ZodOptional<z.ZodNumber>;
    creator: z.ZodObject<{
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
    deadline: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    endDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    fundraising: z.ZodOptional<z.ZodObject<{
        perPerson: z.ZodNumber;
        accumulated: z.ZodNumber;
        goal: z.ZodNumber;
        goalReached: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        perPerson: number;
        accumulated: number;
        goal: number;
        goalReached?: boolean | undefined;
    }, {
        perPerson: number;
        accumulated: number;
        goal: number;
        goalReached?: boolean | undefined;
    }>>;
    ticketPrice: z.ZodOptional<z.ZodNumber>;
    /** @deprecated */
    imageUri: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodString;
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
    eventAgents: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<["collaborator", "scanner"]>;
        status: z.ZodEnum<["pending", "accepted", "rejected"]>;
        user: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }, {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }>, "many">;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: Timestamp;
    type: "ticketed" | "fundraising" | "base";
    title: string;
    shortId: string;
    activity: string;
    creator: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUrl: string;
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
    eventAgents: {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }[];
    fundraising?: {
        perPerson: number;
        accumulated: number;
        goal: number;
        goalReached?: boolean | undefined;
    } | undefined;
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    ticketPrice?: number | undefined;
    imageUri?: string | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}, {
    createdAt: Timestamp;
    type: "ticketed" | "fundraising" | "base";
    title: string;
    shortId: string;
    activity: string;
    creator: {
        uid: string;
        name: string;
        avatarURL?: string | undefined;
        avatar?: string | undefined;
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUrl: string;
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
    eventAgents: {
        status: "accepted" | "rejected" | "pending";
        role: "collaborator" | "scanner";
        user: {
            uid: string;
            name: string;
            avatarURL?: string | undefined;
            avatar?: string | undefined;
        };
    }[];
    fundraising?: {
        perPerson: number;
        accumulated: number;
        goal: number;
        goalReached?: boolean | undefined;
    } | undefined;
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    ticketPrice?: number | undefined;
    imageUri?: string | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}>;
export declare const eventTicketSchema: z.ZodObject<{
    eventId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: Timestamp;
    eventId: string;
    userId: string;
}, {
    createdAt: Timestamp;
    eventId: string;
    userId: string;
}>;
export type EventTicketType = z.infer<typeof eventTicketSchema>;
export type EventType = z.infer<typeof eventSchema>;
export type EventAgentsType = z.infer<typeof eventAgentsSchema>;
