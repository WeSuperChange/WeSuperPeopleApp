import React from 'react'
import styles from "../assets/css/Error.module.css";


const ErrorPage = () => {
    return (
        <div className={styles.allError}>
            <div className={styles.text}>
                <h1 className={styles.error}>🚫 Error<span className={styles.webStrokeError}> &nbsp;404</span>&nbsp;🚫</h1>
                <p className={styles.errorText}>Deine Gedanken konnten nicht mit der Community Super People geteilt werden! you will be redirectd to the question in 3s</p>
            </div>
        </div>
    );
};

export default ErrorPage;

// http://localhost:3000/err404
