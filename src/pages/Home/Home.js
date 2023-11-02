import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ban1 from "../../assets/images/ban1.png";
import data from "../../flats.json";
import styles from "./Home.module.scss";

const Home = () => {
    const flats = data;

    return (
        <div className={styles.home}>
            {/* Bannière */}
            <Banner
                image={ban1}
                title="Chez vous, partout et ailleurs"
                alt="Kasa : agence de location d'appartements en France"
            />

            <div className={styles.container}>
                {/* Cartes sur l'accueil */}
                <div className={styles.homeCard}>
                    <div className={styles.flatsCard}>
                        {/* Boucle pour afficher chaque carte d'appartement */}
                        {flats.map((flat) => (
                            <Card
                                key={flat.id}
                                id={flat.id}
                                title={flat.title}
                                cover={flat.cover}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
