import { z } from "zod";
import { Timestamp } from "@firebase/firestore";
import { eventTypeSchema } from "./events";
export const calendarSchema = z.object({
    eventId: z.string(),
    joinerId: z.string(),
    eventType: eventTypeSchema,
    startDate: z.instanceof(Timestamp),
    createdAt: z.instanceof(Timestamp),
    updatedAt: z.instanceof(Timestamp),
});
