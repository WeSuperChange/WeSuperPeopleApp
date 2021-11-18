import React from "react";
import styles from "../assets/css/Poll.module.css";
import { useState } from "react";

export default function Poll(props) {
    const [questionGo, setQuestionGo] = useState("");
    console.log(questionGo);

    return (
        <div
            onClick={() => setQuestionGo(questionGo + props.eprops)}
            className={styles.PollCard}
        >
            <div hidden={true}>{props.id}</div>
            <div className={styles.category}>{props.category}</div>
            <h3 className={styles.question}>{props.question}</h3>
        </div>
    );
}
