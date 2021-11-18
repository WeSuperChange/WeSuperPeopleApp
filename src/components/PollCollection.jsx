import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styles from "../assets/css/PollCollection.module.css";
import Poll from "../components/Poll";
import { questionContext } from '../context/questionContext'

const PollCollection = () => {
    // const [polls, setPolls] = useState(null);
    //const [pollsReady, setPollsReady] = useState(false);
    let { polls } = useContext(questionContext)
    console.log(polls)
    // useEffect(() => {
    //     let tmpPolls = [];
    //     const backend = process.env.REACT_APP_DEBUG
    //         ? process.env.REACT_APP_BACKEND_DEBUG
    //         : process.env.REACT_APP_BACKEND;
    //     axios
    //         .get(`${backend}/api/polls`)
    //         .then((res) => {
    //             res.data.data.forEach((e) => {
    //                 tmpPolls = [...tmpPolls, e];
    //             });
    //             setPolls([...tmpPolls]);
    //             //setPollsReady(true);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }, []); // eslint-disable-next-line react-hooks/exhaustive-deps
    return (
        <div className={styles.pollCollection}>
            {polls &&
                polls.map((e, i) => (
                    <Poll
                        eprops={e}
                        key={i}
                        category={e.Polls[0].Category}
                        question={e.Polls[0].Question}
                        id={e._id}
                    />
                ))}
        </div>
    );
};

export default PollCollection;
