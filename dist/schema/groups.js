import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userEssentialSchema } from "./users";
export const groupSchema = z.object({
    event: z.string(), // TODO: mark event ref
    name: z.string().optional(),
    type: z.enum(["people", "activities"]),
    members: z.array(userEssentialSchema),
}).describe("for 'people' type, the image should be taken from the avatar of the other participant; " +
    "for 'activities' type, the image should be taken from the image of an event");
export const groupMessagesSchema = z.object({
    message: z.string(),
    senderId: userEssentialSchema,
    createdAt: z.union([z.instanceof(Timestamp), z.instanceof(Date)]),
});
