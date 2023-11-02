import styles from "./Footer.module.scss";
import logokasafooter from "../../assets/images/logokasafooter.png";

const Footer = () => {
    return (
        <footer
            className={`${styles.footer} d-flex flex-column align-items-center justify-content-center p-20`}
        >
            <p>
                <img src={logokasafooter} alt="logo Kasa" />
            </p>
            <p>©2020 Kasa- All rights reserved</p>
        </footer>
    );
};

export default Footer;
