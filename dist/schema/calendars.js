import { z } from "zod";
import { userEssentialSchema } from "./users";
import { Timestamp } from "@firebase/firestore";
import { eventTypeSchema } from "./events";
export const groupSchema = z.object({
    event: z.string(), // TODO: mark event ref
    name: z.string().optional(),
    type: z.enum(["people", "activities"]),
    members: z.array(userEssentialSchema),
}).describe("for 'people' type, the image should be taken from the avatar of the other participant; " +
    "for 'activities' type, the image should be taken from the image of an event");
export const calendarSchema = z.object({
    eventId: z.string(),
    joinerId: z.string(),
    eventType: eventTypeSchema,
    startDate: z.instanceof(Timestamp),
    createdAt: z.instanceof(Timestamp),
    updatedAt: z.instanceof(Timestamp),
});
