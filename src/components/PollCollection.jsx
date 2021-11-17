import React from "react";
import styles from "../assets/css/PollCollection.module.css";
import Poll from "../components/Poll";

const PollCollection = () => {
    return (
        <div className={styles.pollCollection}>
            <Poll />
            <Poll />
            <Poll />
        </div>
    );
};

export default PollCollection;
