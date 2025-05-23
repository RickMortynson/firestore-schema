import { z } from 'zod';
import { Timestamp } from "@firebase/firestore";
import { baseUserSchema } from './types.js';
import { eventSchema } from './events.js';
export const userSchema = baseUserSchema.extend({
    starredEvents: z.array(eventSchema),
});
export const userFriendsSchema = z.object({
    friend: userSchema,
    status: z.enum(['sent', 'accepted', 'rejected', 'pending']),
    createdAt: z.union([
        z.instanceof(Timestamp).default(() => Timestamp.now()),
        z.instanceof(Date).default(() => new Date()),
    ]),
});
export const userNotificationsSchema = z.object({
    activity: z.string(),
});
