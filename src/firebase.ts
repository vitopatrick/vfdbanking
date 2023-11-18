// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQrzY8NnRfdiOhaM_0NMk_EqYbV3SeIA8",
  authDomain: "internationalleo-d5383.firebaseapp.com",
  projectId: "internationalleo-d5383",
  storageBucket: "internationalleo-d5383.appspot.com",
  messagingSenderId: "379525664289",
  appId: "1:379525664289:web:c75cfa710e6feb9a025d60",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);