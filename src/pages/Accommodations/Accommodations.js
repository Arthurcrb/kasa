import React from "react";
import accommodationsData from "../../data/accommodations.json";
import styles from "./Accommodations.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Stars from "../../components/Star/Star";
import Carroussel from "../../components/Carroussel/Carroussel";
import Error from "../../pages/Error/Error";

const Accommodations = () => {
    const { id } = useParams();
    const property = accommodationsData.find((a) => a.id === id);

    if (!property) {
        return <Error />;
    }

    return (
        <>
            <div className={styles.coverAccomodation}>
                <Carroussel pictures={property.pictures} />
            </div>

            <div className={styles.headerAccommodation}>
                <div className={styles.headerLeftAccomodation}>
                    <h1 className={styles.titleAccomodation}>
                        {property.title}
                    </h1>
                    <p className={styles.location}>{property.location}</p>
                    <p className={styles.tags}>
                        {property.tags.map((tags, index) => (
                            <button className={styles.tag} key={index}>
                                {tags}
                            </button>
                        ))}
                    </p>
                </div>

                <div className={styles.headerRightAccomodation}>
                    <div className={styles.host}>
                        <p className={styles.name}>{property.host.name}</p>
                        <img
                            src={property.host.picture}
                            alt="Proprietaire"
                            className={styles.hostPicture}
                        />
                    </div>
                    <div className={styles.ratings}>
                        <Stars rating={property.rating} />
                    </div>
                </div>
            </div>

            <div className={styles.accomodationContainer}>
                <div className={styles.descriptionContainer}>
                    <Collapse
                        titleAccommodation="Description"
                        textDescription={property.description}
                        isDefaultOpen={true}
                        pageStyle="accomodation"
                    />
                </div>
                <div className={styles.equipmentsContainer}>
                    <Collapse
                        titleAccommodation="Equipements"
                        textEquipments={property.equipments.map(
                            (equipments, index) => (
                                <li key={index}>{equipments}</li>
                            )
                        )}
                        isDefaultOpen={true}
                        pageStyle="accomodation"
                    />
                </div>
            </div>
        </>
    );
};

export default Accommodations;
