import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    let navigate = useNavigate()

    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

                if (!user.emailVerified) {
                    //set error = email not verified
                    setError("E-Mail wurde noch nicht bestätigt!")
                }
                dispatch({ type: 'LOGIN', payload: user })
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return { error, login };
}