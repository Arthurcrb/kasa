import data from "../../data/accommodations.json";
import Banner from "../../components/Banner/Banner";
import ban1 from "../../assets/images/ban1.png";
import styles from "./Home.module.scss";
import Card from "../../components/Card/Card";

const Home = () => {
    const accommodations = data;

    return (
        <>
            <div>
                <Banner
                    image={ban1}
                    title="Chez vous, partout et ailleurs"
                    alt="Kasa : agence de location d'appartements en France"
                />
            </div>

            <div className={styles.container}>
                <div className={`card p-20 ${styles.contentCard}`}>
                    <div className={styles.grid}>
                        {accommodations.map((a) => (
                            <Card
                                key={a.id}
                                id={a.id}
                                title={a.title}
                                cover={a.cover}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
