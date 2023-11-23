// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRitF2-TlCDXRk5sVI9j3R1Pz0bYsiDIw",
  authDomain: "vfbanking-190b0.firebaseapp.com",
  projectId: "vfbanking-190b0",
  storageBucket: "vfbanking-190b0.appspot.com",
  messagingSenderId: "571805365228",
  appId: "1:571805365228:web:8a377bf26901b1a6f986c9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);