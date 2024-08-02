import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-notification-spa.firebaseapp.com",
  projectId: "fir-notification-spa",
  storageBucket: "fir-notification-spa.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);