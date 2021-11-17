import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import ContactSidebar from "../components/ContactSidebar";
import styles from "../assets/css/PollThanks.module.css";

export default function PollThanks() {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 3000);
    return redirectNow ? (
        <Navigate to="/" />
    ) : (
        <div className={styles.allPollThanks}>
            <ContactSidebar />
            <div className={styles.text}>
                <h1 className={styles.yeah}>
                    🎉 YEAH
                    <span className={styles.webStrokeYeah}> &nbsp;YEAH</span>
                    &nbsp;🎉
                </h1>
                <p className={styles.deineGedanken}>
                    Deine Gedanken sind mit der Community Super People geteilt!
                    you will be redirectd to the result in 3s
                </p>
            </div>
        </div>
    );
}

// http://localhost:3000/poll_thanks
