import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    //init error and auth context
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    let navigate = useNavigate()

    const signup = (email, password) => {
        //reset error
        setError(null)
        //create user in firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                sendEmailVerification(userCredential.user)
                dispatch({ type: 'LOGIN', payload: userCredential.user })
                navigate('/login')
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, signup }
}