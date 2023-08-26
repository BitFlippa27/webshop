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
  setDoc,
  collection,
  writeBatch,
  query, 
  getDocs
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

//goes to backend, one time thing
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Commit done")
}
//avoid side effects from 3rd party library so encapsulate code here
export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  //await Promise.reject(new Error("new Error wooooopsi"));

  const querySnapshot = await getDocs(q);
  //convert Object to Map
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

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

  return userSnapshot;

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

//runs the callback whenever the auth state changes
export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);  //create a Listener using this call back -> returns a listener

  
//checking if user state has changed
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  });
}