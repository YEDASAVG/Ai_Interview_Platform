
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcVOKqYEeboymfeLRbhBmF8zNSM9yZ7wQ",
  authDomain: "prepwise-d4311.firebaseapp.com",
  projectId: "prepwise-d4311",
  storageBucket: "prepwise-d4311.firebasestorage.app",
  messagingSenderId: "501698600315",
  appId: "1:501698600315:web:1ad9c06acfb041aae0b1de",
  measurementId: "G-DSS594EV05"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);