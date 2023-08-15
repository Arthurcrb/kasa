import React, { useState, useEffect, useCallback } from "react";
import style from "./Carroussel.module.scss";
import previewArrow from "../../assets/images/preview.png";
import nextArrow from "../../assets/images/next.png";

const Carroussel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // État pour stocker l'index du slide actuel.
    const length = slides.length; // Nombre total de slides

    // On passe au slide suivant
    const nextSlide = useCallback(() => {
        setCurrentIndex((currentIndex + 1) % length); // Incrémente l'index en boucle
    }, [currentIndex, length]);

    // On passe au slide précédent
    const prevSlide = useCallback(() => {
        setCurrentIndex((currentIndex - 1 + length) % length); // Décrémente l'index en boucle
    }, [currentIndex, length]);

    // Effet pour automatiser le changement de slide toutes les 3 secondes
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [nextSlide]);

    return (
        <div className={style.carrousel}>
            {/* Affichage des slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${style.slide} ${
                        index === currentIndex
                            ? style.activeSlide
                            : style.inactiveSlide
                    }`}
                >
                    {index === currentIndex && (
                        <img
                            src={slide}
                            alt={`Slide ${index}`}
                            className={style.slide}
                        />
                    )}
                </div>
            ))}

            {/* Affichage des flèches de navigation et du numéro du slide */}
            {length > 1 && (
                <div className={style.slideContainer}>
                    <div className={style.previous} onClick={prevSlide}>
                        <img
                            src={previewArrow}
                            alt="Retour"
                            className={style.previewArrow}
                        />
                    </div>
                    <div className={style.next} onClick={nextSlide}>
                        <img
                            src={nextArrow}
                            alt="Suivant"
                            className={style.nextArrow}
                        />
                    </div>
                    <div className={style.numberImg}>
                        {currentIndex + 1} / {length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carroussel;
