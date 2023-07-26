import React, { useState } from 'react'
import styles from './Collapse.module.scss'

const Collapse = ({
    titleAbout,
    textAbout,
    titleAccommodation,
    textDescription,
    textEquipments,
    isDefaultOpen,
    pageStyle,
}) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultOpen)

    const toggleCard = () => {
        setIsExpanded(!isExpanded)
    }

    const cardClassName =
        pageStyle === 'accomodation' ? styles.cardAccomodation : styles.card

    return (
        <div className={cardClassName}>
            <div className={styles.header} onClick={toggleCard}>
                <h3>
                    {titleAbout}
                    {titleAccommodation}
                </h3>
                <i
                    className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ${
                        styles.arrow
                    } icon`}
                ></i>
            </div>
            {isExpanded && (
                <div className={styles.content}>
                    <p>
                        {textAbout}
                        {textDescription}
                    </p>
                    <ul>{textEquipments}</ul>
                </div>
            )}
        </div>
    )
}

export default Collapse
