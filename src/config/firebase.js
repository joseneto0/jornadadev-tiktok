import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB58fjR8rn9mYJEL6CHtLkGSg_PplEt79Q",
  authDomain: "tiktok---jornadaebac.firebaseapp.com",
  projectId: "tiktok---jornadaebac",
  storageBucket: "tiktok---jornadaebac.appspot.com",
  messagingSenderId: "46418631808",
  appId: "1:46418631808:web:c24690cbd126b52f69da65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;