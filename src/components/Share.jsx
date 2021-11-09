import React from "react";
import styles from '../assets/css/Share.module.css';

const Share = () => {
    return (
        <div className={styles.share}>
            <p className={styles.shareFriends}>Share with friends</p>
            <img className={styles.icon} src="/img/facebook_icon.png" alt="" />
            <img className={styles.icon} src="/img/twitter_icon.png" alt="" />
            <img className={styles.icon} src="/img/instagram_icon.png" alt="" />
            <img className={styles.icon} src="/img/link_icon.png" alt="" />
        </div>
    );
};

export default Share;
