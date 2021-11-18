import React from "react";
import styles from "../assets/css/Poll.module.css";
import { useNavigate, Link } from "react-router-dom";

export default function Poll(props) {

    /*     const navigate = useNavigate();
    
        const toLetsgo = () => {
            navigate('/letsgo', { state: { questionGo: props.eprops } });
        }
        const toResult = () => {
            navigate('/results', { state: { questionGo: props.eprops } });
        } */

    return (
        <div
            className={styles.PollCard}
        >
            <Link to={`/letsgo/${props.id}`}
            /* onClick={() => { toLetsgo() }} */
            /* className={} Styling (width: 90-95%) */
            >
                <div className={styles.category}>{props.category}</div>
                <h3 className={styles.question}>{props.question}</h3>
            </Link>
            <div
            /* onClick={() => { toResult() }} */
            /* className={ } Styling (width: restlichen %) + Button */
            >
            </div>
        </div >
    );
}