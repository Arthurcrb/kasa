import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.scss";

const navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
      <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default navigation;