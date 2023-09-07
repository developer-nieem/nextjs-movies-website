'use client'
import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '@/firebase/firebase.config';


const LoginWithGoogle = () => {
    const provider =  new GoogleAuthProvider()
    const auth = getAuth(app);

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <div>
            <div className="text-center">
            <button onClick={loginWithGoogle} className="btn btn-primary mt-10 pl-10 pr-10">Login with Google</button>
          </div>
        </div>
    );
};

export default LoginWithGoogle;