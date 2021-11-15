import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/QuestionCard.module.css";

const QuestionCard = () => {
    return (
        <div className={styles.allQuestionCard}>
            <h3 className={styles.question}>
                Do you believe the climate is changing?
            </h3>
            <div className={styles.answers}>
                <h4 className={styles.answerOne}>Yes</h4>
                <h4 className={styles.answerTwo}>The climate is changing?</h4>
                <h4 className={styles.answerThree}>No</h4>
            </div>
        </div>
    );
};

export default QuestionCard;
