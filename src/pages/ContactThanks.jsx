import React from 'react'
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
import styles from "../assets/css/ContactThanks.module.css"
import { Link } from "react-router-dom";


export default function ContactThanks() {
    // const [redirectNow, setRedirectNow] = useState(false);
    // setTimeout(() => setRedirectNow(true), 30000);
    // return redirectNow ? (
    //     <Navigate to="/" />
    // ) : (
    return (
        <div className={styles.contactThanks}>
            <div className={styles.text}>
                <h1 className={styles.thx}>🎉YEAH <span className={styles.webStrokeContactThx}> THANKS</span>🎉</h1>
                <p className={styles.contactThanksText}>Deine Anfrage ist mit der Community We Super People geteilt! <br /> Wir werden die Nachricht so schnell wie möglich bearbeiten und Dir zurück <br /> schreiben ;-)</p>
                <br />
                <p className={styles.contactThanksText}> Du wirst in 30 Sekunden auf die Homepage weitergeleitet. Viel Spaß weiterhin ;-)</p>
            </div>

            <div className={styles.sidebar}>
                <Link to="/" className={styles.link}>
                    {"<<"}
                </Link>
            </div>
        </div >
    )
}
