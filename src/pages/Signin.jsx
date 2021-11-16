import React from "react";
import ContactSidebar from "../components/ContactSidebar";
import SignInCard from '../components/SignInCard';
import "../assets/css/style.css";
import styles from "../assets/css/SignIn.module.css";

const SignIn = () => {
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
                <h1 className={styles.h1}>
                    We Super
                    <br /> &nbsp;&nbsp;&nbsp;People
                </h1>
            </section>
            {/* ============================== Start of right Area ================================= */}
            <section className={styles.mainsectionright}>
                {/* here component for charts, survey, etc */}
                <SignInCard className={styles.componentSignInCard} />
            </section>
        </div>
    );
};

export default SignIn;