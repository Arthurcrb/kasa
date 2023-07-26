import data from '../../data/accommodations.json'
import Topbanner from '../../components/Topbanner/Topbanner'
import image from '../../assets/images/homeban.png'
import styles from './Homepage.module.scss'
import Card from '../../components/Card/Cards'

export default function Homepage() {
    const accommodations = data

    return (
        <>
            <div className="home__banner">
                <Topbanner
                    image={image}
                    title="Chez vous, partout et ailleurs"
                    alt="bannière Kasa, leader de la location entre particuliers en France"
                />
            </div>

            <div className="container">
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
    )
}
