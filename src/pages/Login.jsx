<<<<<<< HEAD
import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
=======
import React from 'react';
import styles from "../assets/css/Login.module.css";
import SuperPeople from '../components/SuperPeople';
import LoginCard from '../components/LoginCard';

export default function Login() {
    return (
        <div className={styles.allLogin}>
            {/* <SuperPeople /> */}
            <LoginCard className={styles.componentLoginCard} />
>>>>>>> 6b36a3518f41de59dc39e2f08e66001290c0da32
        </div>
    )
}
