import React from "react";
import PollCollection from "../components/PollCollection";
import ContactSidebar from "../components/ContactSidebar";
import "../assets/css/style.css";
import styles from "../assets/css/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.parent}>
            <ContactSidebar />
            <section className={styles.mainsectionleft}>
                <img
                    src="./img/logo_1.png"
                    alt="We Super People logo"
                    className={styles.logo}
                />
                <h1 className={styles.h1}>We Super People -</h1>
                <h2 className={styles.h2}>
                    Digitalisierungsinitiative für private Umfragen.
                </h2>
                <p className={styles.p}>
                    Opensource für Privatpersonen zum Gedankenaustausch.
                </p>
                <Link to="/login" className={styles.buttonblue}>
                    LOG IN
                </Link>
                <Link to="/letsgo" className={styles.buttongreen}>
                    Los gehts
                </Link>
            </section>
            <section className={styles.mainsectionright}>
                <PollCollection />
            </section>
        </div>
    );
};

export default Home;