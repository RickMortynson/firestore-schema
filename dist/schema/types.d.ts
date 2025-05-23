import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
export declare const baseUserSchema: z.ZodObject<{
    fullName: z.ZodString;
    username: z.ZodString;
    avatarURL: z.ZodString;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    dateOfBirth: z.ZodString;
    formatPreference: z.ZodString;
    genderIdentity: z.ZodString;
    phoneNumber: z.ZodString;
    stripeCustomerId: z.ZodOptional<z.ZodString>;
    settings: z.ZodObject<{
        allowInvitesFromStrangers: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        allowInvitesFromStrangers: boolean;
    }, {
        allowInvitesFromStrangers: boolean;
    }>;
    permissions: z.ZodObject<{
        cameraAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        contactAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        calendarAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        locationAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        motionFitnessAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        pushNotifications: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
        }, {
            granted: boolean;
            toggledInApp: boolean;
        }>;
        cameraRollAccess: z.ZodObject<{
            granted: z.ZodBoolean;
            toggledInApp: z.ZodBoolean;
        } & {
            accessType: z.ZodEnum<["limited", "full", "denied"]>;
        }, "strip", z.ZodTypeAny, {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        }, {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        }>;
    }, "strip", z.ZodTypeAny, {
        cameraAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        contactAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        calendarAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        locationAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        motionFitnessAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        pushNotifications: {
            granted: boolean;
            toggledInApp: boolean;
        };
        cameraRollAccess: {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        };
    }, {
        cameraAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        contactAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        calendarAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        locationAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        motionFitnessAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        pushNotifications: {
            granted: boolean;
            toggledInApp: boolean;
        };
        cameraRollAccess: {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        };
    }>;
    prefferedActivities: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    username: string;
    avatarURL: string;
    createdAt: Timestamp;
    dateOfBirth: string;
    formatPreference: string;
    genderIdentity: string;
    phoneNumber: string;
    settings: {
        allowInvitesFromStrangers: boolean;
    };
    permissions: {
        cameraAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        contactAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        calendarAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        locationAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        motionFitnessAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        pushNotifications: {
            granted: boolean;
            toggledInApp: boolean;
        };
        cameraRollAccess: {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        };
    };
    prefferedActivities: string[];
    stripeCustomerId?: string | undefined;
}, {
    fullName: string;
    username: string;
    avatarURL: string;
    createdAt: Timestamp;
    dateOfBirth: string;
    formatPreference: string;
    genderIdentity: string;
    phoneNumber: string;
    settings: {
        allowInvitesFromStrangers: boolean;
    };
    permissions: {
        cameraAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        contactAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        calendarAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        locationAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        motionFitnessAccess: {
            granted: boolean;
            toggledInApp: boolean;
        };
        pushNotifications: {
            granted: boolean;
            toggledInApp: boolean;
        };
        cameraRollAccess: {
            granted: boolean;
            toggledInApp: boolean;
            accessType: "limited" | "full" | "denied";
        };
    };
    prefferedActivities: string[];
    stripeCustomerId?: string | undefined;
}>;
