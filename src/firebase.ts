// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgJgbwqavKpBkC9vAtYJAs42mIpKM58Q",
  authDomain: "vfdbanking.firebaseapp.com",
  projectId: "vfdbanking",
  storageBucket: "vfdbanking.appspot.com",
  messagingSenderId: "499942488653",
  appId: "1:499942488653:web:660f996a2fcd47d53dfa04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
