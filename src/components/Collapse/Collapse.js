import React, { useState } from 'react';
import styles from './Collapse.module.scss'; // Import the CSS file directly

const Collapse = ({
  titleAbout,
  textAbout,
  titleAccommodation,
  textDescription,
  textEquipments,
  isDefaultOpen,
  pageStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(isDefaultOpen);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  // icon rotation animation
  const iconStyle = {
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className={`card ${pageStyle === 'accommodation' ? 'cardAccommodation' : ''}`}>
      <div className={styles.header} onClick={toggleCard}>
        <h3>
          {titleAbout}
          {titleAccommodation}
        </h3>
        <i className="fas fa-chevron-down icon" style={iconStyle}></i>
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
  );
};

export default Collapse;