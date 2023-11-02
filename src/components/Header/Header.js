import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img src={logo} alt="logo Kasa" className={styles.logoKasa} />
            </Link>
            <Nav />
        </div>
    );
};

export default Header;
