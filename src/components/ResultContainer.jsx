import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/ResultContainer.module.css";

const ResultContainer = () => {
    return (
        <figure className={styles.figure}>
            <img
                src="/img/Lable.png"
                alt=""
                srcset=""
                width="10%"
                className={styles.label}
            />
            <p className={styles.p}></p>
            {/* IMG unten wird ersetz durch Chart */}
            <img
                src="/img/Screenshot.png"
                alt=""
                srcset=""
                width="90%"
                className={styles.img}
            />
            <p className={styles.p}></p>
            <img
                src="/img/Lable.png"
                alt=""
                srcset=""
                width="10%"
                className={styles.label}
            />
            <p className={styles.p}></p>
            {/* IMG unten wird ersetz durch Chart */}
            <img
                src="/img/Screenshot.png"
                alt=""
                srcset=""
                width="90%"
                className={styles.img}
            />
            <p className={styles.p}></p>
            <img
                src="/img/Lable.png"
                alt=""
                srcset=""
                width="10%"
                className={styles.label}
            />
            <p className={styles.p}></p>
            {/* IMG unten wird ersetz durch Chart */}
            <img
                src="/img/Screenshot.png"
                alt=""
                srcset=""
                width="90%"
                className={styles.img}
            />
        </figure>
    );
};

export default ResultContainer;
