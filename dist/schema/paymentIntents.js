import { z } from "zod";
import { userEssentialSchema } from "./users";
import { Timestamp } from "@firebase/firestore";
export const groupSchema = z.object({
    event: z.string(), // TODO: mark event ref
    name: z.string().optional(),
    type: z.enum(["people", "activities"]),
    members: z.array(userEssentialSchema),
}).describe("for 'people' type, the image should be taken from the avatar of the other participant; " +
    "for 'activities' type, the image should be taken from the image of an event");
export const paymentIntentSchema = z.object({
    uid: z.string(),
    eventId: z.string(),
    amount: z.number(),
    status: z.string(),
    created: z.number(),
    paymentMethod: z.string().nullable(),
    ticketCount: z.number().optional().nullable(),
    createdAt: z.instanceof(Timestamp),
    updatedAt: z.instanceof(Timestamp),
});
