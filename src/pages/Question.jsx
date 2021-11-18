import React, { useContext } from "react";
import ContactSidebar from "../components/ContactSidebar";
// import SuperPeople from "../components/SuperPeople";
import QuestionCard from "../components/QuestionCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/style.css";
import styles from "../assets/css/Question.module.css";
import { questionContext } from "../context/questionContext";

const Question = () => {
    let idElt = useParams().id;
    console.log(idElt);

    let { polls } = useContext(questionContext);

    //const location = useLocation();
    console.log(polls);
    //const [pollReady, setPollReady] = useState(false)
    //const [poll, setPoll] = useState(null)
    //console.log(location.state.questionGo)
    //setPoll(location.state.questionGo)

    let one = polls.filter((elt) => elt._id === idElt);
    console.log(one);

    // setPoll(one[0])
    const handleSkip = () => {
        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;
        axios
            .get(`${backend}/api/poll/rnd`)
            .then((res) => {
                one = res.data.data;
                //setPollReady(true)
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    /* const handleNext = () => {
        // update poll set count+1
        console.log("next")
    } */

    return (
        <div className={styles.allQuestion}>
            <ContactSidebar />
            <div className={styles.leftarea}>
                {/* Question - ToDo: Sidebar goes to app.js */}
                {/* <SuperPeople /> */}
                <Link to="/">
                    <img
                        src="/img/logo_1.png"
                        alt="We Super People logo"
                        className={styles.logo}
                    />
                </Link>
                <h1 className={styles.h1}>
                    We Super
                    <br /> &nbsp;&nbsp;&nbsp;People
                </h1>
                {/* ============================== Start of left Area ================================= */}
                <h2 className={styles.allVoices}>
                    <span className={styles.webStroke}>
                        All voices should be heard.&nbsp;
                    </span>
                    Use yours today!
                </h2>
            </div>
            {/* ============================== Start of right Area ================================= */}
            <div className={styles.rightarea}>
                {one && <QuestionCard poll={one[0]} />}
                <Link
                    // to={`/letsgo/${next.poll[0].id}`}
                    to=""
                    className={styles.skip}
                    onClick={handleSkip}
                >
                    SKIP {">>"}
                </Link>
                {/* <Link to="" className={styles.skip} onClick={handleNext}>NEXT {">>"}</Link> */}
            </div>
        </div>
    );
};

export default Question;
