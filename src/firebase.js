// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsy2RLIbnTYtql8-U81RSTwqzob53HIRg",
  authDomain: "capstone-fa2e3.firebaseapp.com",
  projectId: "capstone-fa2e3",
  storageBucket: "capstone-fa2e3.firebasestorage.app",
  messagingSenderId: "1080862179163",
  appId: "1:1080862179163:web:daec7b68af403b30e3a47e",
  measurementId: "G-9M6PQ19BWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };