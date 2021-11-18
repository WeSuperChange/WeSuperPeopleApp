import React from "react";
import styles from "../assets/css/Poll.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Poll(props) {
    const [questionGo, setQuestionGo] = useState("");
    console.log(questionGo);

    return (
        <div
            onClick={() => setQuestionGo(props.eprops)}
            className={styles.PollCard}
        >
            <div hidden={true}>{props.id}</div>
            <div className={styles.category}>{props.category}</div>
            <h3 className={styles.question}>{props.question}</h3>
            {/* <Link to="/results" className={styles.arrows}> */}
            <img src="./img/arrows.png" alt="" className={styles.arrows} />
            {/* </Link> */}
        </div>

    );
}