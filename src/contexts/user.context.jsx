import { useState, useEffect, createContext } from "react";
import { onAuthStateChangedListener, logOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  
  //logOutUser();
  //listens for changes when the app mounts and after when an auth event happens
  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user) => {
    if(user) {
      createUserDocumentFromAuth(user); //create database entry if we get a user back
    }
    console.log(user)
    setCurrentUser(user);
   })

   return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}