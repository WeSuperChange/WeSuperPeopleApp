import { signOut } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const logout = () => {
        setError(null)
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, logout }
}