import React, { useState, useEffect, useCallback } from 'react';
import style from './Carroussel.module.scss';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

const Carroussel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % length);
  }, [currentIndex, length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + length) % length);
  }, [currentIndex, length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className={style.carrousel}>
      {pictures.map((picture, index) => (
        <div
          key={index}
          className={`${style.carrouselpicture} ${
            index === currentIndex ? style.carrouselpictureactive : style.carrouselpictureinactive
          }`}
        >
          {index === currentIndex && <img src={picture} alt={`Slide ${index}`} className={style.carrouselpicture} />}
        </div>
      ))}

      {length > 1 && (
        <>
          <div className={style.previous} onClick={prevSlide}>
            <img src={leftArrow} alt="Slide précédent" className={style.leftArrow} />
          </div>
          <div className={style.next} onClick={nextSlide}>
            <img src={rightArrow} alt="Slide suivant" className={style.rightArrow} />
          </div>
        </>
      )}

      <div className={style.number}>
        {currentIndex + 1} / {length}
      </div>
    </div>
  );
};

export default Carroussel;