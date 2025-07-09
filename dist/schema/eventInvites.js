import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userEssentialSchema } from "./users";
export const userEventInvitesSchema = z.intersection(z.object({
    eventId: z.string(),
    status: z.enum(["accepted", "invited", "rejected"]),
    createdAt: z.instanceof(Timestamp),
    inviteCode: z.string().optional(),
}), z.discriminatedUnion("inviteeType", [
    z.object({
        inviteeType: z.literal("user"),
        ...userEssentialSchema.shape,
    }),
    z.object({
        inviteeType: z.literal("rsvp"),
        phoneNumber: z.string(),
        uid: z
            .string()
            .optional()
            .describe("value is set after the use joins the event through the web app"),
        name: z
            .string()
            .describe("The name that RSVP users selects in the app, used inside the event card"),
    }),
]));
