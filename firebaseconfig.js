// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBMCEc8IdUW9PXcRfo8WZxQlbTxlo73Q",
  authDomain: "advanced-mobile-dev-q1-25.firebaseapp.com",
  projectId: "advanced-mobile-dev-q1-25",
  storageBucket: "advanced-mobile-dev-q1-25.firebasestorage.app",
  messagingSenderId: "24627596297",
  appId: "1:24627596297:web:fd0133b808afd360ca3cd8",
  measurementId: "G-F9SWPQ7S1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };