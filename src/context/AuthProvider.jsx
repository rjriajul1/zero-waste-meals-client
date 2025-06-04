import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null)
    console.log(user);
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

    // update user 
    const updateUser = (userUpdate) => {
        return updateProfile(auth.currentUser, userUpdate)
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
       loginWithGoogle,
       updateUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;