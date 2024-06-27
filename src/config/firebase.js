// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmF2wUUrPu0MJlQCwXSMH7ysyS7eoJ-Xs",
  authDomain: "todo-app-fa3c5.firebaseapp.com",
  projectId: "todo-app-fa3c5",
  storageBucket: "todo-app-fa3c5.appspot.com",
  messagingSenderId: "698160692432",
  appId: "1:698160692432:web:85731906e3fb73caccf2d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);
