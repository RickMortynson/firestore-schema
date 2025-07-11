import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
const permissionSchema = z.object({
    granted: z.boolean(),
    toggledInApp: z.boolean(),
});
export const userSchema = z.object({
    fullName: z.string(),
    username: z.string(),
    avatarURL: z.string().url(),
    createdAt: z.instanceof(Timestamp),
    dateOfBirth: z.string().datetime(),
    formatPreference: z.string().describe("In-person, Online, Hybrid"),
    genderIdentity: z.string(),
    phoneNumber: z.string().regex(/^\+1\d{10}$/),
    stripeCustomerId: z.string().optional(),
    settings: z.object({
        allowInvitesFromStrangers: z.boolean(),
    }),
    fcmToken: z.string().optional(),
    permissions: z.object({
        cameraAccess: permissionSchema,
        contactAccess: permissionSchema,
        calendarAccess: permissionSchema,
        locationAccess: permissionSchema,
        motionFitnessAccess: permissionSchema,
        pushNotifications: permissionSchema,
        cameraRollAccess: permissionSchema.extend({
            accessType: z.enum(["limited", "full", "denied"]),
        }),
    }),
    preferredActivities: z.array(z.string()),
    starredEventsId: z.array(z.string()),
});
export const userFriendsSchema = z.object({
    friend: userSchema,
    // status: z.enum(['sent', 'accepted', 'rejected', 'pending']),
    createdAt: z.union([
        z.instanceof(Timestamp).default(() => Timestamp.now()),
        z.instanceof(Date).default(() => new Date()),
    ]),
});
export const userNotificationsSchema = z.object({
    title: z.string(),
    body: z.string(),
    type: z.enum([
        "message",
        "friend_request",
        "friend_accepted",
        "event_invite",
        "event_update",
        "group_message",
        "contact_joined_app",
        "user_rejected_event",
    ]),
    data: z.record(z.string()).optional(),
    createdAt: z.instanceof(Timestamp),
});
export const userEssentialSchema = z.object({
    uid: z.string(),
    name: z.string(),
    avatarURL: z.string().url().optional(),
    /** @deprecated */
    avatar: z.string().url().optional(),
});
export const userFriendRequestsSchema = z.object({
    senderId: z.string(),
    fullName: z.string(),
    mutualFriendsCount: z.number(),
    username: z.string(),
    status: z.enum(["accepted", "rejected", "pending"]),
    createdAt: z.instanceof(Timestamp),
});
