import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    //init error and auth context
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const signup = (email, password) => {
        //reset error
        setError(null)
        //create user in firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log(userCredential)

                dispatch({ type: 'LOGIN', payload: user })

            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, signup }
}