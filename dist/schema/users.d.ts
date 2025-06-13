import { z } from 'zod';
import { Timestamp } from "@firebase/firestore";
export declare const userSchema: z.ZodObject<{
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
    fcmToken: z.ZodOptional<z.ZodString>;
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
    preferredActivities: z.ZodArray<z.ZodString, "many">;
    starredEventsId: z.ZodArray<z.ZodString, "many">;
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
    preferredActivities: string[];
    starredEventsId: string[];
    stripeCustomerId?: string | undefined;
    fcmToken?: string | undefined;
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
    preferredActivities: string[];
    starredEventsId: string[];
    stripeCustomerId?: string | undefined;
    fcmToken?: string | undefined;
}>;
export declare const userFriendsSchema: z.ZodObject<{
    friend: z.ZodObject<{
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
        fcmToken: z.ZodOptional<z.ZodString>;
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
        preferredActivities: z.ZodArray<z.ZodString, "many">;
        starredEventsId: z.ZodArray<z.ZodString, "many">;
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
        preferredActivities: string[];
        starredEventsId: string[];
        stripeCustomerId?: string | undefined;
        fcmToken?: string | undefined;
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
        preferredActivities: string[];
        starredEventsId: string[];
        stripeCustomerId?: string | undefined;
        fcmToken?: string | undefined;
    }>;
    status: z.ZodEnum<["sent", "accepted", "rejected", "pending"]>;
    createdAt: z.ZodUnion<[z.ZodDefault<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>, z.ZodDefault<z.ZodType<Date, z.ZodTypeDef, Date>>]>;
}, "strip", z.ZodTypeAny, {
    createdAt: Date | Timestamp;
    status: "sent" | "accepted" | "rejected" | "pending";
    friend: {
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
        preferredActivities: string[];
        starredEventsId: string[];
        stripeCustomerId?: string | undefined;
        fcmToken?: string | undefined;
    };
}, {
    status: "sent" | "accepted" | "rejected" | "pending";
    friend: {
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
        preferredActivities: string[];
        starredEventsId: string[];
        stripeCustomerId?: string | undefined;
        fcmToken?: string | undefined;
    };
    createdAt?: Date | Timestamp | undefined;
}>;
export declare const userNotificationsSchema: z.ZodObject<{
    activity: z.ZodString;
}, "strip", z.ZodTypeAny, {
    activity: string;
}, {
    activity: string;
}>;
export declare const userEssentialSchema: z.ZodObject<{
    uid: z.ZodString;
    name: z.ZodString;
    avatarURL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    avatarURL: string;
    uid: string;
    name: string;
}, {
    avatarURL: string;
    uid: string;
    name: string;
}>;
export type UserEssential = z.infer<typeof userEssentialSchema>;
export type User = z.infer<typeof userSchema>;
export type UserFriends = z.infer<typeof userFriendsSchema>;
export type UserNotifications = z.infer<typeof userNotificationsSchema>;
