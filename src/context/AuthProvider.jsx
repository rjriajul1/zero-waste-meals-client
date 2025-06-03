import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    // register user with password and email 
    const register = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
       register
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;