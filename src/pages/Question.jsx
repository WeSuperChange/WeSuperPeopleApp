import React, { useState } from "react";
import ContactSidebar from "../components/ContactSidebar";
// import SuperPeople from "../components/SuperPeople";
import QuestionCard from "../components/QuestionCard";
import { Link } from "react-router-dom";
import axios from 'axios'
import "../assets/css/style.css";
import styles from "../assets/css/Question.module.css";

const Question = () => {

    //console.log(useParams())

    /* if (Object.keys(props.poll).length === 0) {
        // if empty
      } else {
        // setPoll(useParams());
      } */
    const [poll, setPoll] = useState({})
    const [pollReady, setPollReady] = useState(false)

    const handleSkip = () => {
        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;
        axios
            .get(`${backend}/api/poll/rnd`)
            .then((res) => {
                setPoll(res.data.data)
                setPollReady(true)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const handleNext = () => {
        // update poll set count+1
        console.log("next")
    }
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
                {pollReady &&
                    <QuestionCard poll={poll} />
                }
                <Link to="" className={styles.skip} onClick={handleSkip}>SKIP {">>"}</Link>
                <Link to="" className={styles.skip} onClick={handleNext}>NEXT {">>"}</Link>
            </div>
        </div>
    );
};

export default Question;
