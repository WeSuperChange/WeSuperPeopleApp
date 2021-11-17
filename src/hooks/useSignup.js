import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export const useSignup = () => {
    //init error and auth context
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    let navigate = useNavigate();

    const signup = (email, password) => {
        //reset error
        setError(null);
        //create user in firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                sendEmailVerification(userCredential.user);

                const backend = (process.env.REACT_APP_DEBUG ? process.env.REACT_APP_BACKEND_DEBUG : process.env.REACT_APP_BACKEND);
                axios.post(`${backend}/api/user`, { UID: userCredential.user.uid })
                    .then(res => {
                        console.log(res);
                        // console.log(res.data);
                    })
                    .catch((error) => {
                        setError(error.message);
                    });

                dispatch({ type: 'LOGIN', payload: userCredential.user });
                navigate('/login');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return { error, signup };
}