import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/QuestionCard.module.css";
import QuestionCardAnswer from "./QuestionCardAnswer";

const QuestionCard = () => {
    return (
        <div className={styles.allQuestionCard}>
            <h3 className={styles.question}>
                Do you believe the climate is changing?
            </h3>
            <div className={styles.answers}>
                <QuestionCardAnswer answer={"text"} />
                <QuestionCardAnswer answer={"text"} />
                <QuestionCardAnswer answer={"text"} />
                <QuestionCardAnswer answer={"text"} />
            </div>
        </div>
    );
};

export default QuestionCard;
