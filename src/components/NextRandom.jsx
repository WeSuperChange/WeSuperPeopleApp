import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/NextRandom.module.css";

const NextRandom = () => {
    return (
        <div className={styles.div}>
            <section className={styles.section}>
                <h2 className={styles.h2}>NEXT UP:</h2>
                <h3 className={styles.h3}>Here is question placeholder?</h3>
            </section>
            <figure className={styles.figure}>
                <img
                    src="/img/arrow-down-solid.svg"
                    alt=""
                    srcset=""
                    className={styles.img}
                />
            </figure>
        </div>
    );
};

export default NextRandom;
