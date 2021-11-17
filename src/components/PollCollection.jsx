import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import styles from "../assets/css/PollCollection.module.css";
import Poll from "../components/Poll";

const PollCollection = () => {
    useEffect(() => {
        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;
        axios
            .get(`${backend}/api/polls`)
            .then((res) => {
                console.log(res);

                //<Navigate to="/new_poll" />
            })
            .catch((error) => {
                console.log(error.message);
            });
    });
    return (
        <div className={styles.pollCollection}>
            <Poll />
            <Poll />
            <Poll />
        </div>
    );
};

export default PollCollection;
