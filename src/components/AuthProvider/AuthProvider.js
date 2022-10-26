import React from 'react';

import { createContext } from 'react';
import app from '../../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(app)
const auth = getAuth()
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //create-user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn-User
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //updateProfile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //logOut-user
    const logOut = () => {
        return signOut(auth)
    }

    //Google-sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // sideEffect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe;
    }, [])




    const authInfo = {
        user,
        createUser,
        logInUser,
        logOut,
        updateUserProfile,
        googleSignIn
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;