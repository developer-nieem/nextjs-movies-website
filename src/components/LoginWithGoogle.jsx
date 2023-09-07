'use client'
import React, { useContext } from 'react';

import { AuthContext } from '@/provider/Authprovider';


const LoginWithGoogle = () => {
   

    const {loginGoogle} = useContext(AuthContext);

    const loginWithGoogle = () => {
        loginGoogle()
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