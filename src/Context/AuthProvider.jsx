import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const CreateUserWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    createUser,
    CreateUserWithGoogle,
    logIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
