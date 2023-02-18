import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase.config';

export const AuthorContext = createContext()
const auth = getAuth(app);


const Context = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singUp = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, password)
    }

    const loginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect ( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    // const emailVerify = ( ) => {
    //     return sendEmailVerification(auth.currentUser)

    // }

    // const passReset = email => {
    //     return sendPasswordResetEmail(auth, email)
    // }


    const authInfo = {
        createUser,
        singUp,
        user,
        loginProvider,
        updateUser,
        logout,
        loading,
         
    }

    return (
        <AuthorContext.Provider value={authInfo}>
            {children}
        </AuthorContext.Provider>
    );
};

export default Context;