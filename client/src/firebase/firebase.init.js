// Import the functions you need from the SDKs you need

// Firebase configuration using environment variables
//const firebaseConfig = {
//  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//appId: import.meta.env.VITE_FIREBASE_APP_ID,
//measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARIPGgwQn2236S7OTI2Ky-RrElJqkxwFc",
  authDomain: "fir-auth-api-65cd6.firebaseapp.com",
  projectId: "fir-auth-api-65cd6",
  storageBucket: "fir-auth-api-65cd6.firebasestorage.app",
  messagingSenderId: "307074051558",
  appId: "1:307074051558:web:a5256c592238bc664f3a27",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
