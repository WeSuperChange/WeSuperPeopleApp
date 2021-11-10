import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/ContactSidebar.module.css";

const ContactSidebar = () => {
    return (
        <div className={styles.contactsidebar}>
            <p className={styles.pfeile}>{">>"}</p>
        </div>
    );
};

export default ContactSidebar;
