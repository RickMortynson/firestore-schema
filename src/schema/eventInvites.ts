import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userEssentialSchema } from "./users";

export const userEventInvitesSchema = z.intersection(
  z.object({
    eventId: z.string(),
    status: z.enum(["join", "fundraising", "ticketedExperience"]),
    createdAt: z.instanceof(Timestamp),
  }),
  z.discriminatedUnion("inviteeType", [
    z.object({
      inviteeType: z.literal("user"),
      uid: userEssentialSchema,
    }),
    z.object({
      inviteeType: z.literal("rsvp"),
      phoneNumber: z.string().optional(),
    }),
  ]),
);

export type UserInvitesType = z.infer<typeof userEventInvitesSchema>;
