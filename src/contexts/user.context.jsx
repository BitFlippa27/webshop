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

  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user) => {
    if(user) {
      createUserDocumentFromAuth(user);
    }
    console.log(user)
    setCurrentUser(user);
   })
   

   return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}