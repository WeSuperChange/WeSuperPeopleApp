import React from "react";
import styles from "../assets/css/QuestionCardAnswer.module.css";

const QuestionCardAnswer = (props) => {
    return (
        <div className={styles.divAnswer}>
            <p className={styles.propsAnswer}>{props.answer}</p><input className={styles.radioButton} type="radio" value="Answer" name="answer" />
        </div>
    );
};

export default QuestionCardAnswer;