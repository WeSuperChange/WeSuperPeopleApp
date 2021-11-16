import React from "react";
import ContactSidebar from "../components/ContactSidebar";
import { Link } from "react-router-dom";
import NewPollCard from "../components/NewPollCard";
import "../assets/css/style.css";
import styles from "../assets/css/NewPoll.module.css";

const NewPoll = () => {
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
                <NewPollCard />
            </section>
        </div>
    );
};

export default NewPoll;
