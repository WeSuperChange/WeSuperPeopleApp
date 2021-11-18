import React, { useState, useContext } from "react";
import ContactSidebar from "../components/ContactSidebar";
import "../assets/css/style.css";
import styles from "../assets/css/Letsgo.module.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { questionContext } from '../context/questionContext'
export default function Letsgo() {
    let idElt = useParams().id
    const [title, setTitle] = useState(null);
    let { polls } = useContext(questionContext)
    let one = polls.filter(elt => elt._id === idElt)
    console.log(one[0].Polls[0].Question)
    /*     const location = useLocation();
        const navigate = useNavigate();
    
        console.log(location.state.questionGo)
    
        const [questionGo, setQuestionGo] = useState({})
        setQuestionGo(location.state.questionGo)
    
        const toQuestion = () => {
            navigate('/question', { state: { questionGo } });
        } */
    console.log(useParams())
    return (
        <div className={styles.allLetsgo}>
            <ContactSidebar />
            {/* ============================== Start of left Area ================================= */}
            <Link to="/">
                <img src="./img/logo_1.png" alt="" className={styles.logo} />
            </Link>

            <div className={styles.letsgo}>
                <h1 className={styles.los}>
                    Los <span className={styles.geht}>geht´s</span>
                </h1>
                <p className={styles.hi}>
                    Hi, jetzt gleich erwarten dich ein paar Fragen zu
                    interessanten Themen. Bitte nimm dir genug Zeit alle Frage
                    in Ruhe und vollständig auszufüllen. Bist du bereit um deine
                    Gedanken mit der Community zu teilen?!
                </p>
                <p className={styles.pollquestion}>
                    {/* {location.state.questionGo.Polls[0].Question} */}
                    {one[0].Polls[0].Question}
                </p>
            </div>
            {/* ============================== Start of right Area ================================= */}
            <div className={styles.startEnter}>
                <Link to={`/question/${idElt}`} /* onClick={() => toQuestion()} */ className={styles.start}>
                    Start
                </Link>
                <p>
                    <span className={styles.press}>press</span> Enter
                </p>
            </div>
        </div>
    );
}
