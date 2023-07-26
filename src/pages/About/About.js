import React from 'react'
import styles from './About.module.scss'
import image from '../../assets/images/aboutban.png'
import Topbanner from '../../components/Topbanner/Topbanner'
import Collapse from '../../components/Collapse/Collapse'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className="home__banner">
                <Topbanner image={image} alt="bannière à propos de Kasa" />
            </div>

            <div className={styles.cardContainer}>
                <Collapse
                    titleAbout="Fiabilité"
                    textAbout="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    isDefaultOpen={false}
                />
                <Collapse
                    titleAbout="Respect"
                    textAbout="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
                <Collapse
                    titleAbout="Service"
                    textAbout="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
                <Collapse
                    titleAbout="Sécurité"
                    textAbout="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    isDefaultOpen={false}
                    pageStyle="about"
                />
            </div>
        </div>
    )
}

export default About
