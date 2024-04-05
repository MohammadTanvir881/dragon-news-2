import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [loading , setLoading]= useState(true)
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = (provider)=>{
       return signInWithPopup(auth, provider)
  }

  const logIn = (email , password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email , password)
  }

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth , currentUser=>{
    // console.log('Inside Current User')
    setUser(currentUser)
    setLoading(false)
   })
   return ()=>{
    unSubscribe
   }
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    googleProvider,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
