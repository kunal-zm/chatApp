// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAHJKrfh0nrbHyGDBlygOdDRSlGYIyQC14",
  authDomain: "chatyy-f908f.firebaseapp.com",
  projectId: "chatyy-f908f",
  storageBucket: "chatyy-f908f.appspot.com",
  messagingSenderId: "798137132646",
  appId: "1:798137132646:web:7e8f21585dc110b735efa7",
  measurementId: "G-MEDTL9HW58"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage(app);
export const db=getFirestore(app)