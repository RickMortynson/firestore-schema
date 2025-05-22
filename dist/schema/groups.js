import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
import { userSchema } from "./users";
export const groupSchema = z.object({
    event: z.string(), // TODO: mark event ref
    name: z.string().optional(),
    members: z.array(userSchema),
});
export const groupMessagesSchema = z.object({
    message: z.string(),
    sender: userSchema,
    createdAt: z.union([z.instanceof(Timestamp), z.instanceof(Date)]),
});
