import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAHJKrfh0nrbHyGDBlygOdDRSlGYIyQC14",
  authDomain: "chatyy-f908f.firebaseapp.com",
  projectId: "chatyy-f908f",
  storageBucket: "chatyy-f908f.appspot.com",
  messagingSenderId: "798137132646",
  appId: "1:798137132646:web:7e8f21585dc110b735efa7",
  measurementId: "G-MEDTL9HW58"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);