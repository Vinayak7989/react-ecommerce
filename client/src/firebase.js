import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBOEqwm8pUJfZzigdx4XVsTaslgXjVmKk",
  authDomain: "ecom-24673.firebaseapp.com",
  projectId: "ecom-24673",
  storageBucket: "ecom-24673.appspot.com",
  messagingSenderId: "930337869026",
  appId: "1:930337869026:web:8de2740e8d5e634a61e2bb",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
