import React from 'react'
import styles from "../assets/css/PollThanks.module.css";

export default function PollThanks() {
    return (
        <div className={styles.allPollThanks}>
            <div className={styles.text}>
                <h1 className={styles.yeah}>🎉 YEAH<span className={styles.webStrokeYeah}> &nbsp;YEAH</span>&nbsp;🎉</h1>
                <p className={styles.deineGedanken}>Deine Gedanken sind mit der Community Super People geteilt! you will be redirectd to the result in 3s</p>
            </div>
        </div>
    )
}

// http://localhost:3000/poll_thanks