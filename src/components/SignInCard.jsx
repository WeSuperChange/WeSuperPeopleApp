import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../assets/css/SignInCard.module.css";
import { useSignup } from '../hooks/useSignup';

export default function SignInCard() {

    // Login handler
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmedPassword] = useState('');
    const { error, signup } = useSignup()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            //error
        } else {
            signup(email, password)
        }
    }

    return (
        <div className={styles.allSigninCard}>
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
                        placeholder="Passwort"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="PasswortZwei" className={styles.password}>Passwort wiederholen
                        <span className={styles.star}> &nbsp;* <br /></span>
                    </label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Passwort"
                        value={confirmPassword}
                        required
                        onChange={(e) => setconfirmedPassword(e.target.value)}
                    />
                </fieldset>

                {/* <fieldset className={styles.fieldsetThree}>
                    <label htmlFor="PasswortZwei" className={styles.password}>Passwort wiederholen
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
                </fieldset> */}

                <div className={styles.buttonContainer}>
                    <div>
                        <Link to="/login" className={styles.lostPassword}>
                            Anmelden?
                        </Link>
                    </div>
                    <div>
                        <input className={styles.signinButton} type="submit" value="SIGNIN" />
                    </div>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


