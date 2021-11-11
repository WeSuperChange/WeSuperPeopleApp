import React from 'react';
// import ContactSidebar from "../components/ContactSidebar";
import "../assets/css/style.css";
import styles from "../assets/css/Letsgo.module.css";
import { Link } from "react-router-dom";


export default function Letsgo() {
    return (
        <div className={styles.allLetsgo}>
            {/* <ContactSidebar /> */}
            <img src="./img/logo_1.png" alt="" className={styles.logo} />
            <div className={styles.letsgo}>
                <h1 className={styles.los}>Los <span className={styles.geht}>geht´s</span></h1>
                <p className={styles.hi}>
                    Hi, jetzt gleich erwarten dich ein paar Fragen zu interessanten Themen. Bitte nimm dir genug Zeit alle Frage in Ruhe und vollständig auszufüllen. Bist du bereit um deine Gedanken mit der Community zu teilen?!
                </p>
                <h3 className={styles.doYou}>Do You Believe the climate is changing</h3>
                <div className={styles.startEnter}>
                    <Link to="/question" className={styles.start}>
                        Start
                    </Link>
                    <p>press Enter</p>
                </div>
            </div>
        </div>
    )
}
