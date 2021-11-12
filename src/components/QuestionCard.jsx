import React from "react";
import styles from "../assets/css/QuestionCard.module.css";
import QuestionCardAnswer from "./QuestionCardAnswer";

const QuestionCard = () => {
    return (
        <div className={styles.questionCard}>
            <h3 className={styles.question}>Do you believe the climate is changing?</h3>
            <form action="" className={styles.formAnswer}>
                <QuestionCardAnswer answer={"Antwort1"} />
            </form>
        </div>
    );
};

export default QuestionCard;
