import React from "react";
import ContactSidebar from "../components/ContactSidebar";
import ResultContainer from "../components/ResultContainer";
import "../assets/css/style.css";
import styles from "../assets/css/OwnPoll.module.css";
import { Link } from "react-router-dom";

const OwnPoll = () => {
    return (
        <div className={styles.parent}>
            {/* Home - Todo: Sidebar will be moved to app.js */}
            <ContactSidebar />
            {/* ============================== Start of left Area ================================= */}
            <section className={styles.mainsectionleft}>
                <Link to="/">
                    <img
                        src="./img/logo_1.png"
                        alt="We Super People logo"
                        className={styles.logo}
                    />
                </Link>
                <h1 className={styles.h1}>
                    We Super
                    <br /> &nbsp;&nbsp;&nbsp;People
                </h1>
            </section>
            {/* ============================== Start of right Area ================================= */}
            <section className={styles.mainsectionright}>
                {/* here component for charts, survey, etc */}
                <ResultContainer />
                <Link to="/" className={styles.buttonblue}>
                    LÖSCHEN
                </Link>
                <Link to="/new_poll" className={styles.buttongreen}>
                    BEARBEITEN
                </Link>
            </section>
        </div>
    );
};

export default OwnPoll;
