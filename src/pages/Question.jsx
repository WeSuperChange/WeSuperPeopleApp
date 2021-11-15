import React from "react";
import SuperPeople from "../components/SuperPeople";
import QuestionCard from "../components/QuestionCard";
import "../assets/css/style.css";
import styles from "../assets/css/Question.module.css";

const Question = () => {
    return (
        <div className={styles.allQuestion}>
            <div>
                {/* Question - ToDo: Sidebar goes to app.js */}
                <SuperPeople />
                {/* ============================== Start of left Area ================================= */}
                <h2 className={styles.allVoices}>
                    <span className={styles.webStroke}>
                        All voices should be heard.&nbsp;
                    </span>
                    Use yours today!

                </h2>
            </div>
            {/* ============================== Start of right Area ================================= */}
            <div>
                <QuestionCard />
            </div>
        </div>
    );
};

export default Question;
