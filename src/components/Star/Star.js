import React from 'react'
import style from './Star.module.scss'
import redstar from '../../assets/images/redstar.png'
import greystar from '../../assets/images/greystar.png'

const Stars = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className={style.rating}>
      {stars.map((element) => 
      // étoile pleine suivant la valeur indiquée
      rating >= element ? (
          <img
            key={element.toString()}
            className={style.redstar}
            src={redstar}
            alt="étoile rouge"
          />
        ) : (
        // par défaut étoile vide
          <img
          key={element.toString()}
            className={style.greystar}
            src={greystar}
            alt="étoile grise"
          />
        )
      )}
    </div>
  )
}
export default Stars