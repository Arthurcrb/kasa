import styles from "./Header.module.scss";
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header() {
 return (
  <header className={`${styles.header} d-flex flex-row align-items-center justify-content-between`}>
    <Logo />
    <Navigation/>
  </header>
 ) 
}

export default Header;