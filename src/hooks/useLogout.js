import { useState } from 'react';

import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from '../firebase/config'

import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const { user, dispatch } = useAuthContext();
    const logout = () => {

        setError(null);
        signOut(auth)
            .then(() => {
                updateDoc(doc(db, "users", user.uid), { online: false })
                    .then(() => {
                        console.log('user is Logout');
                        dispatch({ type: 'LOGOUT' });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // Log out 

            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return { error, logout };
}