import React from "react";
import styles from "../assets/css/Poll.module.css"

const Poll = (props) => {
    return (
        <div className={styles.PollCard}>
            <div hidden={true}>{props.id}</div>
            <div className={styles.category}>{props.category}</div>
            <h3 className={styles.question}>{props.question}</h3>
        </div >
    );
};

export default Poll;
