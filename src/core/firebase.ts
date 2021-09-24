import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCoNomLgo1AzFU496459A3_GiL35QWJL9s",
  authDomain: "train-me-ce0da.firebaseapp.com",
  databaseURL: "https://train-me-ce0da.firebaseio.com",
  projectId: "train-me-ce0da",
  storageBucket: "train-me-ce0da.appspot.com",
  messagingSenderId: "817757701937",
  appId: "1:817757701937:web:e90c174b9e662f47efd210",
  measurementId: "G-HJDRXZ5ECS"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
