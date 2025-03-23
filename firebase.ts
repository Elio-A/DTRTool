// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcJ6Bteec0voWYkUh-re6druezNixAqeY",
  authDomain: "dtr-tool.firebaseapp.com",
  projectId: "dtr-tool",
  storageBucket: "dtr-tool.firebasestorage.app",
  messagingSenderId: "50060733201",
  appId: "1:50060733201:web:fde584145cdaa0bd59fab0",
  measurementId: "G-DE04PLPDWC"
};

// Initialize Firebase
export const db = getFirestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);