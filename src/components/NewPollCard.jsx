import React from "react";
import { useState } from "react";
import styles from "../assets/css/NewPollCard.module.css";

export default function NewQuestion() {
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuestion("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        setAnswer4("");

        const finalAnswerValues = [];
        if (answer1 !== "") {
            finalAnswerValues.push(answer1);
        }
        if (answer2 !== "") {
            finalAnswerValues.push(answer2);
        }
        if (answer3 !== "") {
            finalAnswerValues.push(answer3);
        }
        if (answer4 !== "") {
            finalAnswerValues.push(answer4);
        }
        console.log("question", question);
        console.log("finalAnswerValues", finalAnswerValues);
    };

    return (
        <div className={styles.allNewPollCard}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldsetOne}>
                    <label htmlFor="User" className={styles.frage}>
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
                    <label htmlFor="Passwort" className={styles.antwort}>
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
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name="answer2"
                        placeholder="Antwort 2"
                        value={answer2}
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
                    <input
                        className={styles.buttonblue}
                        type="submit"
                        value="NÄCHSTE"
                    />
                    <input
                        className={styles.buttongreen}
                        type="submit"
                        value="FERTIG"
                    />
                </div>
            </form>
        </div>
    );
}
