import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>404</h1>
            <div className={styles.text404}>
                Oups, la page que vous demandez n'existe pas
            </div>
            <Link to="/" className={styles.linkHome}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
};

export default Error;
