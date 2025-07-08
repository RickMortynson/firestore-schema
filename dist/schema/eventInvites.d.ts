import { Timestamp } from "@firebase/firestore";
import { z } from "zod";
export declare const userEventInvitesSchema: z.ZodIntersection<z.ZodObject<{
    eventId: z.ZodString;
    status: z.ZodEnum<["accepted", "invited", "rejected"]>;
    createdAt: z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>;
    inviteCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: Timestamp;
    status: "accepted" | "rejected" | "invited";
    eventId: string;
    inviteCode?: string | undefined;
}, {
    createdAt: Timestamp;
    status: "accepted" | "rejected" | "invited";
    eventId: string;
    inviteCode?: string | undefined;
}>, z.ZodDiscriminatedUnion<"inviteeType", [z.ZodObject<{
    uid: z.ZodString;
    name: z.ZodString;
    avatarURL: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
    inviteeType: z.ZodLiteral<"user">;
}, "strip", z.ZodTypeAny, {
    uid: string;
    name: string;
    inviteeType: "user";
    avatarURL?: string | undefined;
    avatar?: string | undefined;
}, {
    uid: string;
    name: string;
    inviteeType: "user";
    avatarURL?: string | undefined;
    avatar?: string | undefined;
}>, z.ZodObject<{
    inviteeType: z.ZodLiteral<"rsvp">;
    phoneNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    inviteeType: "rsvp";
    phoneNumber?: string | undefined;
}, {
    inviteeType: "rsvp";
    phoneNumber?: string | undefined;
}>]>>;
export type UserInvitesType = z.infer<typeof userEventInvitesSchema>;
