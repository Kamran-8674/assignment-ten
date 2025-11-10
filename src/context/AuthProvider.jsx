import React, { useEffect, useState } from 'react';
import { AuthContext } from './AUthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const GoogleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null)
    const [loading, setloading]=useState(true)

    const signUpWithEmailAndPass = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }
    const signInWithEmailAndPass= (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
       return signInWithPopup (auth,GoogleProvider)
    }

    const signOutfunc = () =>{
        setloading(true)
        return signOut(auth)
    }
    const profileUpdate = (displayName,photoURL) =>{
        return updateProfile(auth.currentUser,{
         displayName,
         photoURL
        })

    }


    useEffect(()=>{
      const unsuscribed =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setloading(false)
        })
        return ()=>{
            unsuscribed ()
        }
    },[])

    const authInfo = {
        
        user,
        setUser,
      signUpWithEmailAndPass,
      signInWithEmailAndPass,
      signOutfunc,
      profileUpdate,
      loading,
      signInWithGoogle,
    }


    return <AuthContext value={authInfo}>{children}</AuthContext> 
      
};

export default AuthProvider;