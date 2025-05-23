import { env } from "./env.js";
import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { initializeFirestore } from "firebase-admin/firestore";
export const firebaseApp = getApps().length ?
    getApp() :
    initializeApp({
        credential: cert({
            projectId: env.PROJECT_ID,
            privateKey: env.PRIVATE_KEY,
            clientEmail: env.CLIENT_EMAIL,
        }),
    });
console.log('env >>>', env);
export const getFirestore = () => initializeFirestore(firebaseApp);
