import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/SuperPeople.module.css";

const SuperPeople = () => {
    return (
        <div className={styles.logoWeSuperPeople}>
            <img src="./img/logo_1.png" alt="" className={styles.logo} />
            <h1>We Super People</h1>
        </div>
    );
};

export default SuperPeople;