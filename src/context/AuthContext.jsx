import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebase"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth"; 

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const register = (email, password, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      return updateProfile(auth.currentUser, { displayName: name, photoURL });
    });
  };


  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);


  const googleLogin = () => signInWithPopup(auth, googleProvider);

 
  const logout = () => signOut(auth);


  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, register, login, logout, googleLogin, resetPassword, updateUserProfile };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
