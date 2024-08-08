import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDH3a3E062JLEx3Hqosx54ipHSBxsEkIS0",
  authDomain: "fir-notification-spa.firebaseapp.com",
  projectId: "fir-notification-spa",
  storageBucket: "fir-notification-spa.appspot.com",
  messagingSenderId: "325060158692",
  appId: "1:325060158692:web:3398255f5b5ef5c1f6b8f1"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);