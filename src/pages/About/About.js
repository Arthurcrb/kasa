import React from "react";
import styles from "./About.module.scss";
import ban2 from "../../assets/images/ban2.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div>
                <Banner image={ban2} alt="A propos de Kasa" />
            </div>

            <div className={styles.cardContainer}>
                <Collapse
                    titleAbout="Fiabilité"
                    textAbout="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes."
                    isDefaultOpen={false}
                />
                <Collapse
                    titleAbout="Respect"
                    textAbout="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
                <Collapse
                    titleAbout="Service"
                    textAbout="Le service fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
                <Collapse
                    titleAbout="Sécurité"
                    textAbout="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
            </div>
        </div>
    );
};

export default About;
