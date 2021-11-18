import React from "react";
import ContactSidebar from "../components/ContactSidebar";
import "../assets/css/style.css";
import styles from "../assets/css/Letsgo.module.css";
import { Link } from "react-router-dom";

export default function Letsgo() {
    // const { poll } = useParams();
    return (
        <div className={styles.allLetsgo}>
            <ContactSidebar />
            {/* ============================== Start of left Area ================================= */}
            <Link to="/">
                <img src="./img/logo_1.png" alt="" className={styles.logo} />
            </Link>

            <div className={styles.letsgo}>
                <h1 className={styles.los}>
                    Los <span className={styles.geht}>geht´s</span>
                </h1>
                <p className={styles.hi}>
                    Hi, jetzt gleich erwarten dich ein paar Fragen zu
                    interessanten Themen. Bitte nimm dir genug Zeit alle Frage
                    in Ruhe und vollständig auszufüllen. Bist du bereit um deine
                    Gedanken mit der Community zu teilen?!
                </p>
                <p className={styles.pollquestion}>
                    Poll question placeholder??
                </p>
            </div>
            {/* ============================== Start of right Area ================================= */}
            <div className={styles.startEnter}>
                <Link to="/question" className={styles.start}>
                    Start
                </Link>
                {/* <Link to="/question" className={styles.start} params={poll :poll}>
                    Start
                </Link> */}
                <p>
                    <span className={styles.press}>press</span> Enter
                </p>
            </div>
        </div>
    );
}
