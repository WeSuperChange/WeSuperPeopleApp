import React from "react";
import PollCollection from "../components/PollCollection";
import ContactSidebar from "../components/ContactSidebar";
import "../assets/css/style.css";
import styles from "../assets/css/Home.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    return (
        <div className={styles.parent}>
            {/* Home - Todo: Sidebar will be moved to app.js */}
            <ContactSidebar />
            {/* ============================== Start of left Area ================================= */}
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
                {!user && (
                    <Link to="/login" className={styles.buttonblue}>
                        LOG IN
                    </Link>)}
                {user && (
                    <Link to="/" className={styles.buttonblue} onClick={logout}>
                        LOG OUT
                    </Link>)}
                <Link to="/letsgo" className={styles.buttongreen}>
                    LOS GEHT'S
                </Link>
            </section>
            {/* ============================== Start of right Area ================================= */}
            <section className={styles.mainsectionright}>
                {user && (<Link to="/new_poll" className={styles.buttongreen}>+NEW</Link>)}
                <PollCollection />
            </section>
        </div>
    );
};

export default Home;
