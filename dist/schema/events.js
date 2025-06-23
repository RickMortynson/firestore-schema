import { z } from "zod";
import { Timestamp, GeoPoint } from "@firebase/firestore";
import { userEssentialSchema } from "./users";
export const eventAgentsSchema = z.object({
    role: z.enum(["collaborator", "scanner"]),
    status: z.enum(["pending", "accepted", "rejected"]),
    user: userEssentialSchema,
});
export const eventJoinersSchema = z.object({
    phoneNumber: z
        .string()
        .optional()
        .describe("for users without the application"),
    status: z.enum(["going", "rejected", "invited"]),
    user: userEssentialSchema.optional(),
    inviteCode: z
        .string()
        .optional()
        .describe("Unique RSVP invite code to distinguish users"), // xxxx-yyyy-zzzz
});
export const eventSchema = z.object({
    title: z.string(),
    type: z.enum(["ticketed", "fundraising", "base"]),
    shortId: z.string(), // xxxx-yyyy
    activity: z.string().describe("TODO: must be a enum"),
    description: z.string().optional(),
    announcements: z.array(z.string()).optional(),
    capacity: z.number().optional(),
    creator: userEssentialSchema,
    deadline: z
        .instanceof(Timestamp)
        .describe("fundraising deadline. if that date is reached and the goal is not met, the fundraising will be cancelled"),
    endDate: z.instanceof(Timestamp),
    fundraising: z
        .object({
        perPerson: z.number(),
        accumulated: z.number(),
        goal: z.number(),
    })
        .optional()
        .describe("exclusively for fundraising experience"),
    ticketPrice: z
        .number()
        .optional()
        .describe("exclusively for ticketed experience"),
    /** @deprecated */
    imageUri: z.string(),
    imageUrl: z.string(),
    link: z.string().optional(),
    location: z.object({
        location: z.instanceof(GeoPoint),
        name: z.string(),
    }),
    photos: z.array(z.string().url()).optional(),
    shareable: z.object({
        isPublic: z.boolean(),
        shareableUsers: z.array(z.string()).optional(),
    }),
    startDate: z.instanceof(Timestamp),
    usersChecked: z.number().describe("for ticketing experiences").optional(),
    viewCount: z.number(),
    eventJoiners: z.array(eventJoinersSchema),
    eventAgents: z.array(eventAgentsSchema),
    createdAt: z.instanceof(Timestamp)
});
