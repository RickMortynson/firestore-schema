import { z } from 'zod';
import { Timestamp } from "@firebase/firestore";
export declare const userSchema: z.ZodType;
export declare const userFriendsSchema: z.ZodObject<{
    friend: z.ZodType<any, z.ZodTypeDef, any>;
    status: z.ZodEnum<["sent", "accepted", "rejected", "pending"]>;
    createdAt: z.ZodUnion<[z.ZodDefault<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>, z.ZodDefault<z.ZodType<Date, z.ZodTypeDef, Date>>]>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "accepted" | "rejected" | "sent";
    createdAt: Date | Timestamp;
    friend?: any;
}, {
    status: "pending" | "accepted" | "rejected" | "sent";
    createdAt?: Date | Timestamp | undefined;
    friend?: any;
}>;
export declare const userNotificationsSchema: z.ZodObject<{
    activity: z.ZodString;
}, "strip", z.ZodTypeAny, {
    activity: string;
}, {
    activity: string;
}>;
export type User = z.infer<typeof userSchema>;
export type UserFriends = z.infer<typeof userFriendsSchema>;
export type UserNotifications = z.infer<typeof userNotificationsSchema>;
