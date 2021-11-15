import React from 'react';
import styles from "../assets/css/LoginCard.module.css";
import { Link } from "react-router-dom";

export default function LoginCard() {
    return (
        <div className={styles.allLoginCard}>
            <form action="" className={styles.form}>
                <fieldset className={styles.fieldsetOne}>
                    <label htmlFor="User" className={styles.userName}>Benutzername /  Email
                        <span className={styles.star}> &nbsp;* <br /></span>
                    </label>
                    <input className={styles.input} name="name" placeholder="Enter text" />
                </fieldset>
                <fieldset className={styles.fieldsetTwo}>
                    <label htmlFor="Passwort" className={styles.password}>Passwort
                        <span className={styles.star}> &nbsp;* <br /></span>
                    </label>
                    <input className={styles.input} type="password" name="Passwort" placeholder="Passwort" />
                </fieldset>
                <div className={styles.buttonContainer}>
                    <div>
                        <Link to="/" className={styles.lostPassword}>
                            Passwort vergessen?
                        </Link>
                    </div>
                    <div>
                        <input className={styles.loginButton} type="submit" value="LOGIN" />
                    </div>
                </div>
            </form>
        </div>
    )
}


