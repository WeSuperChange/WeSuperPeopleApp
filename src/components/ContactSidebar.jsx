import React from "react";
import "../assets/css/style.css";
import styles from "../assets/css/ContactSidebar.module.css";
import { Link } from "react-router-dom";

const ContactSidebar = () => {
    return (
        <div className={styles.contactsidebar}>
            <Link to="/contact">
                <p className={styles.pfeile}>{">>"}</p>
            </Link>
        </div>
    );
};

export default ContactSidebar;
