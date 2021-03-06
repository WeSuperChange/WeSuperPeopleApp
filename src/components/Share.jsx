import styles from '../assets/css/Share.module.css';
import React from "react";
import { Link } from "react-router-dom";

const Share = () => {
    return (
        <div className={styles.share}>
            <p className={styles.shareFriends}>Share with friends</p>
            <Link to="https://facebook.com">
                <img className={styles.icon} src="/img/facebook.svg" alt="" />
            </Link>
            <Link to="https://twitter.com">
                <img className={styles.icon} src="/img/twitter.svg" alt="" />
            </Link>
            <Link to="https://instagram.com">
                <img className={styles.icon} src="/img/instagram.svg" alt="" />
            </Link>
            <Link to="#">
                <img className={styles.icon} src="/img/link.svg" alt="" />
            </Link>
        </div>
    );
};

export default Share;

// 'Link' is not defined Failed to compile

// Bsp.
// <Link to="https://github.com/Joeyryanbridges">
//     <Image src="giticon.png" className="githubIcon" />
// </Link>