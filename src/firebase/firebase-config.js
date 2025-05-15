// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ6m7H-ZIc4Hgsm3ThHDWQCySDPjyycjI",
  authDomain: "dergititresim-57bbf.firebaseapp.com",
  projectId: "dergititresim-57bbf",
  storageBucket: "dergititresim-57bbf.appspot.com",
  messagingSenderId: "270969482549",
  appId: "1:270969482549:web:c5530d103bfc72743fb07c",
  measurementId: "G-D0KP65WB50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);