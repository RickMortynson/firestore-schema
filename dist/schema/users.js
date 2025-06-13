import { z } from 'zod';
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
    formatPreference: z.string().describe('In-person, Online, Hybrid'),
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
            accessType: z.enum(['limited', 'full', 'denied']),
        }),
    }),
    preferredActivities: z.array(z.string()),
    starredEventsId: z.array(z.string()),
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
export const userEssentialSchema = z.object({
    uid: z.string(),
    name: z.string(),
    avatarURL: z.string().url(),
    /** @deprecated */
    avatar: z.string().url(),
});
