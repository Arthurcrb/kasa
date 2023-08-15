import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ id, title, cover }) => {
    return (
        <article className={styles.cardContainer}>
            {/* Lien vers la page de détails de l'hébergement */}
            <Link
                to={`/flat/${id}`}
                className={styles.link}
                aria-label={`View details of ${title}`}
            >
                {/* Filtre pour l'effet visuel */}
                <div className={styles.filter}></div>
                {/* Image de l'hébergement */}
                <img className={styles.imageCard} src={cover} alt={title} />
                {/* Titre de l'hébergement */}
                <span className={styles.accommodationTitle}>{title}</span>
            </Link>
        </article>
    );
};

// Validation des types des propriétés
Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;
