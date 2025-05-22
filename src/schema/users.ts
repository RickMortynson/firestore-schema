import { z } from 'zod'
import { Timestamp } from "@firebase/firestore";
import { baseUserSchema } from './types.js';
import { eventSchema } from './events.js';

export const userSchema: z.ZodType = baseUserSchema.extend({
  starredEvents: z.array(eventSchema),
})

export const userFriendsSchema = z.object({
  friend: userSchema,
  status: z.enum(['sent', 'accepted', 'rejected', 'pending']),
  createdAt: z.union([
    z.instanceof(Timestamp).default(() => Timestamp.now()),
    z.instanceof(Date).default(() => new Date()),
  ]),
})

export const userNotificationsSchema = z.object({
  activity: z.string(),
})

export type User = z.infer<typeof userSchema>
export type UserFriends = z.infer<typeof userFriendsSchema>
export type UserNotifications = z.infer<typeof userNotificationsSchema>
