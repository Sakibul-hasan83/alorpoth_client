import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './firebase.config';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)

// create new user 
const signup=(email,password)=>{
   setLoader(true)
   return createUserWithEmailAndPassword(auth,email,password)
}


// login user 

const login = (email,password )=>{

    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// logout 

const logout=()=>{

    setLoader(true)
    return signOut(auth)
}

const authInfo ={


user,
loader,
signup,
login,
logout


}

// statechange 

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{

        setUser(currentUser)
        setLoader(false)
    })
    return ()=> unSubscribe() 

},[])

  return (
    <AuthContext.Provider   value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
