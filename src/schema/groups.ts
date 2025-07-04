import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userEssentialSchema } from "./users";

export const groupMessagesSchema = z.object({
  message: z.string(),
  sender: userEssentialSchema,
  createdAt: z.union([z.instanceof(Timestamp), z.instanceof(Date)]),
})

export const groupSchema = z.object({
  event: z.string().optional(), // TODO: mark event ref
  name: z.string().optional(),
  type: z.enum(["people", "activities"]),
  members: z.array(userEssentialSchema),
  lastMessage: groupMessagesSchema,
}).describe("for 'people' type, the image should be taken from the avatar of the other participant; " +
  "for 'activities' type, the image should be taken from the image of an event")

export type GroupType = z.infer<typeof groupSchema>
export type GroupMessagesType = z.infer<typeof groupMessagesSchema>