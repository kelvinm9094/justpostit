// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwVO4PG_W5zm7uEb9MrUtrtUKISwdKA_E",
  authDomain: "justpostit-31780.firebaseapp.com",
  projectId: "justpostit-31780",
  storageBucket: "justpostit-31780.appspot.com", // Corrected potential typo
  messagingSenderId: "72467113620",
  appId: "1:72467113620:web:364f995e576925dce8b681",
  measurementId: "G-EX0ENCBQSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
