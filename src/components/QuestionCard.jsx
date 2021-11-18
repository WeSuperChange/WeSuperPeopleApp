import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/QuestionCard.module.css";
import QuestionCardAnswer from "./QuestionCardAnswer";

const QuestionCard = (props) => {
    console.log(props)
    const poll = props.poll;

    return (
        <div className={styles.allQuestionCard}>
            <h3 className={styles.question}>
                {poll.Polls[0].Question}
            </h3>
            <div className={styles.answers}>
                {poll.Polls[0].PollAnswers.map((e, i) =>
                    <QuestionCardAnswer key={i} id={i} answer={e.AnswerText} />
                )}
            </div>
        </div>
    );
};

export default QuestionCard;
