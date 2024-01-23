// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs9l25ki7CkaRvJM836INBHa_qwlnjDgM",
  authDomain: "rnchat-bf51e.firebaseapp.com",
  projectId: "rnchat-bf51e",
  storageBucket: "rnchat-bf51e.appspot.com",
  messagingSenderId: "90350519944",
  appId: "1:90350519944:web:81e217b5d0be816da9413d",
  measurementId: "G-F0WZRYHVZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth };