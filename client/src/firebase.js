// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a0423.firebaseapp.com",
  projectId: "mern-auth-a0423",
  storageBucket: "mern-auth-a0423.appspot.com",
  messagingSenderId: "331652282661",
  appId: "1:331652282661:web:15b02fdc11523c3ea882cc",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
