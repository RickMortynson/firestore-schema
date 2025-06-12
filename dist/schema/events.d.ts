import { z } from "zod";
import { Timestamp, GeoPoint } from "@firebase/firestore";
export declare const eventAgentsSchema: z.ZodObject<{
    role: z.ZodEnum<["collaborator", "scanner"]>;
    status: z.ZodEnum<["pending", "accepted", "rejected"]>;
    user: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    role: "collaborator" | "scanner";
    status: "pending" | "accepted" | "rejected";
    user: {
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
    };
}, {
    role: "collaborator" | "scanner";
    status: "pending" | "accepted" | "rejected";
    user: {
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
    };
}>;
export declare const eventJoinersSchema: z.ZodObject<{
    phoneNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["going", "rejected", "invited"]>;
    user: z.ZodOptional<z.ZodObject<{
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
    }>>;
    inviteCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "rejected" | "going" | "invited";
    phoneNumber?: string | undefined;
    user?: {
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
    } | undefined;
    inviteCode?: string | undefined;
}, {
    status: "rejected" | "going" | "invited";
    phoneNumber?: string | undefined;
    user?: {
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
    } | undefined;
    inviteCode?: string | undefined;
}>;
export declare const eventSchema: z.ZodObject<{
    title: z.ZodString;
    shortId: z.ZodString;
    activity: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    announcements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    capacity: z.ZodOptional<z.ZodNumber>;
    creator: z.ZodObject<{
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
    deadline: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    endDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    fundraising: z.ZodOptional<z.ZodObject<{
        accumulated: z.ZodNumber;
        goal: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        accumulated: number;
        goal: number;
    }, {
        accumulated: number;
        goal: number;
    }>>;
    ticketPrice: z.ZodOptional<z.ZodNumber>;
    imageUri: z.ZodString;
    link: z.ZodOptional<z.ZodString>;
    location: z.ZodObject<{
        location: z.ZodType<GeoPoint, z.ZodTypeDef, GeoPoint>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        location: GeoPoint;
        name: string;
    }, {
        location: GeoPoint;
        name: string;
    }>;
    photos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shareable: z.ZodObject<{
        isPublic: z.ZodBoolean;
        shareableUsers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    }, {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    }>;
    startDate: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    usersChecked: z.ZodOptional<z.ZodNumber>;
    viewCount: z.ZodNumber;
    joinedUsers: z.ZodArray<z.ZodObject<{
        phoneNumber: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<["going", "rejected", "invited"]>;
        user: z.ZodOptional<z.ZodObject<{
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
        }>>;
        inviteCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "rejected" | "going" | "invited";
        phoneNumber?: string | undefined;
        user?: {
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
        } | undefined;
        inviteCode?: string | undefined;
    }, {
        status: "rejected" | "going" | "invited";
        phoneNumber?: string | undefined;
        user?: {
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
        } | undefined;
        inviteCode?: string | undefined;
    }>, "many">;
    eventAgents: z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<["collaborator", "scanner"]>;
        status: z.ZodEnum<["pending", "accepted", "rejected"]>;
        user: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        role: "collaborator" | "scanner";
        status: "pending" | "accepted" | "rejected";
        user: {
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
        };
    }, {
        role: "collaborator" | "scanner";
        status: "pending" | "accepted" | "rejected";
        user: {
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
        };
    }>, "many">;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: Timestamp;
    title: string;
    shortId: string;
    activity: string;
    creator: {
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
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUri: string;
    location: {
        location: GeoPoint;
        name: string;
    };
    shareable: {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    };
    startDate: Timestamp;
    viewCount: number;
    joinedUsers: {
        status: "rejected" | "going" | "invited";
        phoneNumber?: string | undefined;
        user?: {
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
        } | undefined;
        inviteCode?: string | undefined;
    }[];
    eventAgents: {
        role: "collaborator" | "scanner";
        status: "pending" | "accepted" | "rejected";
        user: {
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
        };
    }[];
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    fundraising?: {
        accumulated: number;
        goal: number;
    } | undefined;
    ticketPrice?: number | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}, {
    createdAt: Timestamp;
    title: string;
    shortId: string;
    activity: string;
    creator: {
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
    };
    deadline: Timestamp;
    endDate: Timestamp;
    imageUri: string;
    location: {
        location: GeoPoint;
        name: string;
    };
    shareable: {
        isPublic: boolean;
        shareableUsers?: string[] | undefined;
    };
    startDate: Timestamp;
    viewCount: number;
    joinedUsers: {
        status: "rejected" | "going" | "invited";
        phoneNumber?: string | undefined;
        user?: {
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
        } | undefined;
        inviteCode?: string | undefined;
    }[];
    eventAgents: {
        role: "collaborator" | "scanner";
        status: "pending" | "accepted" | "rejected";
        user: {
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
        };
    }[];
    description?: string | undefined;
    announcements?: string[] | undefined;
    capacity?: number | undefined;
    fundraising?: {
        accumulated: number;
        goal: number;
    } | undefined;
    ticketPrice?: number | undefined;
    link?: string | undefined;
    photos?: string[] | undefined;
    usersChecked?: number | undefined;
}>;
export type EventType = z.infer<typeof eventSchema>;
export type EventAgentsType = z.infer<typeof eventAgentsSchema>;
export type EventJoinersType = z.infer<typeof eventJoinersSchema>;
