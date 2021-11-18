import React from "react";
import styles from "../assets/css/QuestionCardAnswer.module.css";

const QuestionCardAnswer = (props) => {
    return (
        <div className={styles.allAnswer}>
            <label htmlFor={"myRadioID" + props.id} className={styles.radio}>
                <input
                    type="radio"
                    name="myRadioField"
                    id={"myRadioID" + props.id}
                    className={styles.radio__input}
                />
                <div className={styles.answer}>{props.answer}</div>
                <div className={styles.radio__radio}></div>
            </label>
        </div>
    );
};

export default QuestionCardAnswer;

// ursprüngliche version

// const QuestionCardAnswer = (props) => {
//     return (
//         <div className={styles.divAnswer}>
//             <p className={styles.propsAnswer}>{props.answer}</p>
//             <input className={styles.radioButton} type="radio" value="Answer" name="answer" />
//         </div>
//     );
// };

// export default QuestionCardAnswer;
