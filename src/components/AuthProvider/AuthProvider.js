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
    const [Loading, setLoading] = useState(true)

    //create-user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn-User
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //updateProfile
    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    //logOut-user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Google-sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //github login
    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // sideEffect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe;
    }, [])




    const authInfo = {
        user,
        Loading,
        createUser,
        logInUser,
        logOut,
        updateUserProfile,
        googleSignIn,
        githubLogin,

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