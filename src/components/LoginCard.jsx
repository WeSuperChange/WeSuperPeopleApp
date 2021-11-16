import React from 'react';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from "react-router-dom";
import styles from "../assets/css/LoginCard.module.css";

export default function LoginCard() {

    //Login handler
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, login } = useLogin()
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }

    return (
        <div className={styles.allLoginCard}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldsetOne}>
                    <label htmlFor="User" className={styles.userName}>Email
                        <span className={styles.star}> &nbsp;* <br /></span>
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="Enter text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className={styles.fieldsetTwo}>
                    <label htmlFor="Passwort" className={styles.password}>Passwort
                        <span className={styles.star}> &nbsp;* <br /></span>
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        name="Passwort"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <div className={styles.buttonContainer}>
                    <div>
                        <Link to="/signin" className={styles.lostPassword}>
                            Registrieren?
                        </Link>
                    </div>
                    <div>
                        <input className={styles.loginButton} type="submit" value="LOGIN" />
                    </div>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


