import React from "react";
import flatsData from "../../flats.json";
import { useParams } from "react-router-dom";
import styles from "./Flat.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Star/Star";
import Carroussel from "../../components/Carroussel/Carroussel";
import Error from "../Error/Error";

const Flat = () => {
    const { id } = useParams();
    const property = flatsData.find((flat) => flat.id === id);

    // Vérification si la propriété existe
    if (!property) {
        return <Error />;
    }

    // Décomposition des propriétés de la propriété
    const {
        title,
        location,
        tags,
        host,
        rating,
        description,
        equipments,
        pictures,
    } = property;

    return (
        <>
            {/* Carrousel d'images */}
            <Carroussel slides={pictures} />

            {/* En-tête de l'hébergement */}
            <div className={styles.headerAccommodation}>
                {/* Partie gauche de l'en-tête */}
                <div className={styles.headerLeftAccomodation}>
                    <h1 className={styles.titleAccomodation}>{title}</h1>
                    <p className={styles.location}>{location}</p>
                    <p className={styles.tags}>
                        {/* Affichage des tags */}
                        {tags.map((tag, index) => (
                            <button className={styles.tag} key={index}>
                                {tag}
                            </button>
                        ))}
                    </p>
                </div>

                {/* Partie droite de l'en-tête */}
                <div className={styles.headerRightAccomodation}>
                    <div className={styles.host}>
                        <p className={styles.name}>{host.name}</p>
                        <img
                            src={host.picture}
                            alt="Owner"
                            className={styles.hostPicture}
                        />
                    </div>
                    <div className={styles.ratings}>
                        {/* Affichage de l'évaluation avec les étoiles */}
                        <Stars rating={rating} />
                    </div>
                </div>
            </div>

            {/* Conteneur pour la description et les équipements */}
            <div className={styles.accomodationContainer}>
                {/* Conteneur de la description */}
                <div className={styles.descriptionContainer}>
                    <Collapse
                        titleAccommodation="Description"
                        textDescription={description}
                        isDefaultOpen={true}
                        pageStyle="accomodation"
                    />
                </div>
                {/* Conteneur des équipements */}
                <div className={styles.equipmentsContainer}>
                    <Collapse
                        titleAccommodation="Equipements"
                        textEquipments={equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                        isDefaultOpen={true}
                        pageStyle="accomodation"
                    />
                </div>
            </div>
        </>
    );
};

export default Flat;
