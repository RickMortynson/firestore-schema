import { generateMock } from "@anatine/zod-mock";
import { userSchema } from "../schema/users.js";
import { getFirestore } from "../utils/getFirebase.js";
import { eventSchema } from "../schema/events.js";
import { Timestamp } from "firebase-admin/firestore";
const collectionName = "users";
const users = [...Array(20)].map(() => ({
    ...generateMock(userSchema),
    starredEvents: [
        {
            ...generateMock(eventSchema),
            deadline: Timestamp.now(),
            endDate: Timestamp.now(),
            startDate: Timestamp.now(),
            creator: null,
            location: null
        }
    ],
    createdAt: Timestamp.now()
}));
// console.log('users >>> ', users)
const firestore = getFirestore();
const firestoreBatch = firestore.batch();
users.forEach((user) => {
    const docRef = firestore.collection(collectionName).doc();
    firestoreBatch.set(docRef, user);
});
firestoreBatch.commit()
    .then(console.log)
    .catch(console.error);
