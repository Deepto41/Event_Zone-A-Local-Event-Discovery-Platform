import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
 

} from "firebase/auth";
import app from "../Firebase/firebase.config";


const AuthProvider = ({ children }) => {
const [user,setUser]=useState(null);

  const auth = getAuth(app);
 const provide =new GoogleAuthProvider();

const createUserwithGoogle=()=>{
  return signInWithPopup(provide,auth)
}

  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }



  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser =>{
    console.log('current user', currentUser);
    setUser(currentUser);
    })
    return ()=>{
      unSubscribe()
    }
  },[]);
   
  const signout=()=>{
    return signOut(auth);
  }

  const authData = {
    createUser,
    logIn,
    user,
    signout,
    createUserwithGoogle,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
