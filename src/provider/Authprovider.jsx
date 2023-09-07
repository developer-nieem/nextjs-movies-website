'use client'
import app from '@/firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);



    // google login
    const GoogleProvider =  new GoogleAuthProvider();

    const loginGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    
    const authInfo = {
        name,
        loginGoogle
    }
    return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
};

export default AuthProvider;