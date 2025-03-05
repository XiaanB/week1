import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// Your web app's Firebase configuration
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
const provider = new GoogleAuthProvider();

WebBrowser.maybeCompleteAuthSession();

// Export Auth-related functionalities
export { auth, db, provider, signInWithCredential, GoogleAuthProvider, app };
