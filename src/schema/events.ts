import { z } from "zod";
import { baseUserSchema } from "./types.js";
import { Timestamp, GeoPoint } from "@firebase/firestore";

export const eventSchema = z.object({
  title: z.string(),
  shortId: z.string(),
  activity: z.string().describe("TODO: must be a enum"),
  description: z.string().optional(),
  announcements: z.array(z.string()).optional(),
  capacity: z.number().optional(),
  creator: baseUserSchema,
  deadline: z
    .instanceof(Timestamp)
    .describe(
      "fundraising deadline. if that date is reached and the goal is not met, the fundraising will be cancelled",
    ),
  endDate: z.instanceof(Timestamp),
  fundraising: z
    .object({
      accumulated: z.number(),
      goal: z.number(),
    })
    .optional()
    .describe("exclusively for fundraising experience"),
  ticketPrice: z
    .number()
    .optional()
    .describe("exclusively for ticketed experience"),
  imageUri: z.string(),
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
  createdAt: z.instanceof(Timestamp)
});

export const eventAgentsSchema = z.object({
  role: z.enum(["collaborator", "scanner"]),
  status: z.enum(["pending", "accepted", "rejected"]),
  user: baseUserSchema,
});

export const eventJoinersSchema = z.object({
  phoneNumber: z
    .string()
    .optional()
    .describe("for users without the application"),
  status: z.enum(["going", "rejected", "invited"]),
  user: baseUserSchema.optional(),
});

export type EventType = z.infer<typeof eventSchema>;
export type EventAgentsType = z.infer<typeof eventAgentsSchema>;
export type EventJoinersType = z.infer<typeof eventJoinersSchema>;
