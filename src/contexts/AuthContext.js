import React, { createContext, useContext, useEffect, useState } from "react";
import { FIREBASE_AUTH, firebase } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Dots } from "react-activity";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password, displayName) {
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  }

  function signout() {
    return signOut(FIREBASE_AUTH);
  }

  function updateDisplayName(displayName) {
    updateProfile(FIREBASE_AUTH.currentUser, { displayName: {displayName} });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {
      
        (loading == false) ? children : <div className="flex justify-center items-center h-screen text-primary"><Dots/></div>
      }
    </AuthContext.Provider>
  );
}
