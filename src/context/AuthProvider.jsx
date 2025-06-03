import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    // register user with password and email 
    const register = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    // login user same password and email 
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // login with google 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // user sing out 
    const userSingOut = () => {
        return signOut(auth)
    }

    // observe always user
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        });
        return ()=> {
            unSubscribe()
        }

    }, [])
    const userInfo = {
        loading,
       register,
       login,
       userSingOut,
       user,
       loginWithGoogle
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;