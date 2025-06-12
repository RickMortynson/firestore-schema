import { z } from "zod";
import {Timestamp} from "@firebase/firestore";

const permissionSchema = z.object({
    granted: z.boolean(),
    toggledInApp: z.boolean(),
  });

export const baseUserSchema = z.object({
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
});
