import React from 'react'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "../assets/css/ContactThanks.module.css"

export default function ContactThanks() {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
        <Navigate to="/" />
    ) : (
        <div className={styles.contactThanks}>
            <div className={styles.text}>
                <h1 className={styles.thx}>YEAH <span className={styles.webStrokeContactThx}> THANKS</span></h1>
                <p className={styles.contactThanksText}>Deine Anfrage ist mit der Community We Super People geteilt! Wir werden die Nachricht so schnell wie möglich bearbeiten und Dir zurück schreiben ;-)</p>
            </div>
        </div>
    )
}
