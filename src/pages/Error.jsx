import React from 'react';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "../assets/css/Error.module.css";

const ErrorPage = () => {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
        <Navigate to="/" />
    ) : (
        <div className={styles.allError}>
            <div className={styles.text}>
                <h1 className={styles.error}>🚫 Error<span className={styles.webStrokeError}> &nbsp;404</span>&nbsp;🚫</h1>
                <p className={styles.errorText}>Deine Gedanken konnten nicht mit der Community Super People geteilt werden! you will be redirectd to the question in 3s</p>
            </div>
        </div>
    );
};

export default ErrorPage;
