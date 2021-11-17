import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import styles from "../assets/css/PollCollection.module.css";
import Poll from "../components/Poll";

const PollCollection = () => {
    const [polls, setPolls] = useState(new Map());

    useEffect(() => {
        let tmpPolls = [];
        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;
        axios
            .get(`${backend}/api/polls`)
            .then((res) => {

                res.data.data.forEach(e => {
                    tmpPolls = [...tmpPolls, e]
                });
                setPolls([...tmpPolls])
                //console.log(polls)

                //<Navigate to="/new_poll" />
            })
            .catch((error) => {
                console.log(error.message);
            });

    }, []);
    return (
        <div className={styles.pollCollection}>
            {polls.map(e => (
                < Poll question={e.Polls[0].Question} id={e._id} />
            ))}
        </div>
    );
};

export default PollCollection;
