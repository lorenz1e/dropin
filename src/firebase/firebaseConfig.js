import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEdCJjCq7KKfIUkbTtChSITuNMsaq3BEY",
  authDomain: "dropin-9cbf9.firebaseapp.com",
  projectId: "dropin-9cbf9",
  storageBucket: "dropin-9cbf9.appspot.com",
  messagingSenderId: "960275885481",
  appId: "1:960275885481:web:a79197f33926c6750a68b8"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)