// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASEAPI,
  authDomain: "fir-storage-and-crud.firebaseapp.com",
  projectId: "fir-storage-and-crud",
  storageBucket: "fir-storage-and-crud.appspot.com",
  messagingSenderId: process.env.lOGINID,
  appId: process.env.API_ID,
  measurementId: process.env.MESURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);