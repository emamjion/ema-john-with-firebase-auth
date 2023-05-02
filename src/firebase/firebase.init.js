// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6kM4lGTjLJ_N2iPrOGNGsN0PkPH4cj4",
  authDomain: "ema-john-firebase-auth-5df44.firebaseapp.com",
  projectId: "ema-john-firebase-auth-5df44",
  storageBucket: "ema-john-firebase-auth-5df44.appspot.com",
  messagingSenderId: "161917365280",
  appId: "1:161917365280:web:4a8459fee818ef60e72045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;