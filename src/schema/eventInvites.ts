import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userEssentialSchema } from "./users";

export const userEventInvitesSchema = z.intersection(
  z.object({
    eventId: z.string(),
    status: z.enum(["accepted", "invited", "rejected"]),
    createdAt: z.instanceof(Timestamp),
    inviteCode: z.string().optional(),
  }),
  z.discriminatedUnion("inviteeType", [
    z.object({
      inviteeType: z.literal("user"),
      ...userEssentialSchema.shape,
    }),
    z.object({
      inviteeType: z.literal("rsvp"),
      phoneNumber: z.string().optional(),
    }),
  ]),
);

export type UserInvitesType = z.infer<typeof userEventInvitesSchema>;
