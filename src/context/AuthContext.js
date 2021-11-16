import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            console.log(action)
            return { ...state, user: null }
        case 'CHECK_IF_READY':
            return { ...state, user: action.payload, appReady: true }
        default:
            break;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { user: null, appReady: false });

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch({ type: 'CHECK_IF_READY', payload: user })
            unsub()
        })
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}