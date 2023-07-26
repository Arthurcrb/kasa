import styles from './Card.module.scss';
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/accommodations/${id}`} className={styles.cardContainer}>
      <div className={styles.filter}></div>
      <img className={styles.imageCard} src={cover} alt={title} />
      <span className={styles.accommodationTitle}>{title}</span>
    </Link>
  );
}

export default Card;