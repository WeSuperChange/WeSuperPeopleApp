import React from "react";
import ContactSidebar from "../components/ContactSidebar";
// import SuperPeople from "../components/SuperPeople";
import QuestionCard from "../components/QuestionCard";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import styles from "../assets/css/Question.module.css";

const Question = () => {
    return (
        <div className={styles.allQuestion}>
            <ContactSidebar />
            <div className={styles.leftarea}>
                {/* Question - ToDo: Sidebar goes to app.js */}
                {/* <SuperPeople /> */}
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
                {/* ============================== Start of left Area ================================= */}
                <h2 className={styles.allVoices}>
                    <span className={styles.webStroke}>
                        All voices should be heard.&nbsp;
                    </span>
                    Use yours today!
                </h2>
            </div>
            {/* ============================== Start of right Area ================================= */}
            <div className={styles.rightarea}>
                <QuestionCard />
                <Link to="/question" className={styles.skip}>
                    SKIP {">>"}
                </Link>
                <Link to="/question" className={styles.skip}>
                    NEXT {">>"}
                </Link>
            </div>
        </div>
    );
};

export default Question;
