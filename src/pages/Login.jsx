import React from 'react';
import styles from "../assets/css/Login.module.css";
import SuperPeople from '../components/SuperPeople';
import LoginCard from '../components/LoginCard';

export default function Login() {
    return (
        <div className={styles.allLogin}>
            {/* <SuperPeople /> */}
            <LoginCard className={styles.componentLoginCard} />
        </div>
    )
}
