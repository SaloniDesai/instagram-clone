// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDS5ABtuziAM8R6HO536WA88TWe1_dFVpw",
  authDomain: "instagram-clone-dc1b5.firebaseapp.com",
  projectId: "instagram-clone-dc1b5",
  storageBucket: "instagram-clone-dc1b5.appspot.com",
  messagingSenderId: "610691307735",
  appId: "1:610691307735:web:fc174569d1acf609657892",
  measurementId: "G-MJ1N1FR0JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);