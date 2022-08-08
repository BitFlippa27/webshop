import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

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
const googleProvider = new GoogleAuthProvider(); //different providers (facebook, github etc...) we use Google now 

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  if(!user) return;

  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()) {
    const {displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt,
        ...additionalInfo
      });
    } 
    catch (error) {
      console.log("Error creating User",  error.message); 
    }
  }

  return userDocRef;

}

export const createAuthEmailUser = async (email, password) => {
  console.log("email",email)
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginAuthEmailUser = async (email, password) => {
  console.log("email",email)
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const logOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);