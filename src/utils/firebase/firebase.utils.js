import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8RqLWnB5yxc7AG5U3aH5slfqUxV9bmKU",
  authDomain: "webshop-6fc79.firebaseapp.com",
  projectId: "webshop-6fc79",
  storageBucket: "webshop-6fc79.appspot.com",
  messagingSenderId: "373822791914",
  appId: "1:373822791914:web:2e7c7d68645454dc387793"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);