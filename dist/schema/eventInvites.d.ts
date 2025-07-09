import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
export declare const userEventInvitesSchema: z.ZodIntersection<z.ZodObject<{
    eventId: z.ZodString;
    status: z.ZodEnum<["accepted", "invited", "rejected"]>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    inviteCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "accepted" | "invited" | "rejected";
    eventId: string;
    createdAt: Timestamp;
    inviteCode?: string | undefined;
}, {
    status: "accepted" | "invited" | "rejected";
    eventId: string;
    createdAt: Timestamp;
    inviteCode?: string | undefined;
}>, z.ZodDiscriminatedUnion<"inviteeType", [z.ZodObject<{
    uid: z.ZodString;
    name: z.ZodString;
    avatarURL: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
    inviteeType: z.ZodLiteral<"user">;
}, "strip", z.ZodTypeAny, {
    inviteeType: "user";
    uid: string;
    name: string;
    avatarURL?: string | undefined;
    avatar?: string | undefined;
}, {
    inviteeType: "user";
    uid: string;
    name: string;
    avatarURL?: string | undefined;
    avatar?: string | undefined;
}>, z.ZodObject<{
    inviteeType: z.ZodLiteral<"rsvp">;
    phoneNumber: z.ZodString;
    uid: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    inviteeType: "rsvp";
    name: string;
    phoneNumber: string;
    uid?: string | undefined;
}, {
    inviteeType: "rsvp";
    name: string;
    phoneNumber: string;
    uid?: string | undefined;
}>]>>;
export type UserInvitesType = z.infer<typeof userEventInvitesSchema>;
