// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCKFef7NxgM5eFWsDtEt3Oo9uypiS8RZU",
  authDomain: "e-commerce-3a0d0.firebaseapp.com",
  projectId: "e-commerce-3a0d0",
  storageBucket: "e-commerce-3a0d0.firebasestorage.app",
  messagingSenderId: "459591229566",
  appId: "1:459591229566:web:ead0c22c2d66dc03f5782f",
  measurementId: "G-0J6VX41NNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword}