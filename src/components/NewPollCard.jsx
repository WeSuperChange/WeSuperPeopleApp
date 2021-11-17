import React from "react";
import { useState } from "react";
import styles from "../assets/css/NewPollCard.module.css";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
// const axios = require("axios");

export default function NewQuestion() {
    const { user } = useAuthContext();
    //const [error, setError] = useState(null);

    //set stats for input fields
    const [question, setQuestion] = useState("");
    const [category, setCategory] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        /*         setQuestion("");
                setAnswer1("");
                setAnswer2("");
                setAnswer3("");
                setAnswer4(""); */

        //check if answers filled
        const finalAnswerValues = [];
        if (answer1 !== "") {
            //TODO: set error if emtpy
            finalAnswerValues.push(answer1);
        }
        if (answer2 !== "") {
            //TODO: set error if emtpy
            finalAnswerValues.push(answer2);
        }
        if (answer3 !== "") {
            finalAnswerValues.push(answer3);
        }
        if (answer4 !== "") {
            finalAnswerValues.push(answer4);
        }

        // console.log("user", user);
        // console.log("question", question);
        // console.log("finalAnswerValues", finalAnswerValues);

        //create poll object
        let newPoll = {
            newPollUser: user.uid,
            newPollCategory: category,
            newPollQuestion: question,
            newPollAnswers: [...finalAnswerValues],
        };

        const backend = process.env.REACT_APP_DEBUG
            ? process.env.REACT_APP_BACKEND_DEBUG
            : process.env.REACT_APP_BACKEND;

        axios
            .post(`${backend}/api/poll`, newPoll)
            .then((res) => {
                console.log(res);
                // console.log(res.data);
                newPoll = null;

                setQuestion("");
                setCategory("");
                setAnswer1("");
                setAnswer2("");
                setAnswer3("");
                setAnswer4("");

                //<Navigate to="/new_poll" />
            })
            .catch((error) => {
                console.log(error.message);
            });
        return;
    };

    return (
        <div className={styles.allNewPollCard}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldsetOne}>
                    <label htmlFor="question" className={styles.frage}>
                        Frage
                        <span className={styles.star}>
                            {" "}
                            &nbsp;* <br />
                        </span>
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="frage"
                        placeholder="Enter text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </fieldset>
                <fieldset className={styles.fieldsetTwo}>
                    <label htmlFor="category" className={styles.antwort}>
                        Kategorie
                        <span className={styles.star}>
                            {" "}
                            &nbsp;* <br />
                        </span>
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="category"
                        placeholder="Kategorie"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </fieldset>
                <fieldset className={styles.fieldsetTwo}>
                    <label htmlFor="answers" className={styles.antwort}>
                        Antwort
                        <span className={styles.star}>
                            {" "}
                            &nbsp;* <br />
                        </span>
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="answer1"
                        placeholder="Antwort 1"
                        value={answer1}
                        required
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name="answer2"
                        placeholder="Antwort 2"
                        value={answer2}
                        required
                        onChange={(e) => setAnswer2(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name="answer3"
                        placeholder="Antwort 3"
                        value={answer3}
                        onChange={(e) => setAnswer3(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name="answer4"
                        placeholder="Antwort 4"
                        value={answer4}
                        onChange={(e) => setAnswer4(e.target.value)}
                    />
                </fieldset>
                <div className={styles.buttonContainer}>
                    {/* <input
                        className={styles.buttonblue}
                        type="submit"
                        value="NÄCHSTE"
                    /> */}
                    <input
                        className={styles.buttongreen}
                        type="submit"
                        value="Speichern"
                    />
                </div>
            </form>
        </div>
    );
}
