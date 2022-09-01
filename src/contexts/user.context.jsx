import { useReducer, createContext, useEffect } from "react";
import { onAuthStateChangedListener, logOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducers/reducers.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}
const userReducer = (state, action) => {
  console.log("dispatched", action)
  const { type, payload } = action; 

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
      default:
        throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser)
  const setCurrentUser  = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }
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