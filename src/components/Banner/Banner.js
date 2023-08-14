import React from "react";
import styles from "./Banner.module.scss";

const Banner = ({ image, alt, title }) => {
    return (
        <div className={styles.banner}>
            <img src={image} alt={alt} className={styles.banner__img} />
            <div className={styles.banner__overlay}>
                <div className={styles.banner__text}>{title}</div>
            </div>
        </div>
    );
};

export default Banner;
